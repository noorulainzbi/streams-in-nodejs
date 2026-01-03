import fs from "fs";
import { pipeline } from "stream";

const readStream = fs.createReadStream("write.txt");
const writeStream = fs.createWriteStream("dest.txt");
/*
  ✅ pipe() connects a Readable stream to a Writable stream.
  It automatically:
  - Transfers data chunk by chunk
  - Handles backpressure (pause / resume)
  - Closes the writable stream by default when the readable ends
  pipe() accepts:
  1) A destination stream (Writable / Transform / Duplex)
  2) An optional options object
     - end: true (default) → calls writable.end() when readable finishes
*/

/*************************** SYNTAX *******************************/
// readStream.pipe(writeStream);

/*
  Below is a simplified implementation that explains
  how pipe() works internally.
*/
readStream.pipe = function (writeStream, options = { end: true }) {
  // When readable emits data, write it to the writable stream
  readStream.on("data", (chunk) => {
    const canContinue = writeStream.write(chunk);

    // If writable buffer is full, pause the readable stream
    // This is how backpressure is handled
    if (!canContinue) {
      readStream.pause();
    }
  });

  // When writable buffer is drained, resume the readable stream
  writeStream.on("drain", () => {
    readStream.resume();
  });

  // When readable ends, optionally end the writable stream
  readStream.on("end", () => {
    if (options.end) {
      writeStream.end();
    }
  });

  // pipe() returns the destination stream
  // This enables chaining when the destination is a Transform stream
  return writeStream;
};
readStream.pipe(writeStream);
setTimeout(() => {
  readStream.destroy(new Error("Destroyed manually"));
}, 4);

// Manual error handling when using pipe()
readStream.on("error", (err) => {
  console.log(err);
});

/*
  ❌ pipe() does NOT automatically handle all error cases.
  You must manually listen for 'error' events on each stream.

  ✅ To handle errors and cleanup properly,
  Node.js provides the pipeline() utility.
*/
pipeline(readStream, writeStream, (error) => {
  console.log(error);
});
