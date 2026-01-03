import fs from "fs";
const readStream = fs.createReadStream("chars.txt");
const writeStream = fs.createWriteStream("write.txt", { highWaterMark: 4 });

// ✅ Backpressure is handled by pausing the readable stream when write() returns false and resuming it on the writable stream’s drain event
readStream.on("data", (chunk) => {
  // BACKPRESSURE HANDLING START
  // write() returns false when the writable stream's internal buffer is full
  // At this point, we must stop the readable stream to prevent memory overload
  const canWrite = writeStream.write(chunk);

  if (!canWrite) {
    // Pause reading until the writable stream drains its buffer
    readStream.pause();
  }
});

// BACKPRESSURE RESUME POINT
// 'drain' fires when the writable stream's internal buffer becomes empty again
// It signals that it is safe to resume reading data
writeStream.on("drain", () => {
  readStream.resume();
});

// The above code handles backpressure manually but we have builtin functions/methods in nodejs to handle backpressure
// visit pipe.js file to understand pipi() and pipeline()
