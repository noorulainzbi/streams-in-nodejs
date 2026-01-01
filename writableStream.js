import fs, { read } from "fs";
const writeStream = fs.createWriteStream("output.txt", {
  flags: "w", //write mode
  encoding: "utf-8", // writing string
  highWaterMark: 4, // internal buffer size can hold 4 bytes at a time
  autoClose: true, // close fd automatically
  emitClose: true, // emit close events
});
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 12 });
/*
1️⃣ open
- File descriptor is created
*/
writeStream.on("open", (fd) => {
  console.log("OPEN event, fd:", fd);
});

/*
2️⃣ ready
- Stream is fully initialized
*/
writeStream.on("ready", () => {
  console.log("READY event");
});

readStream.on("data", (chunk) => {
  // ❌ NO BACKPRESSURE HANDLING
  // Readable streams can emit data faster than writable streams can consume it
  // Since we are not checking the return value of write(),
  // data will continue to be pushed into the writable stream's internal buffer
  // This creates backpressure and can lead to high memory usage
  // Backpressure handling logic (pause on write=false, resume on drain)
  // See backpressure.js for the complete implementation
  writeStream.write(chunk);
});

// ❌ 'drain' event is NOT handled here
// Writable stream buffer may overflow before it gets a chance to flush data

readStream.on("end", () => {
  console.log("fired end");
  writeStream.end();
});

/*
4️⃣ finish
- Fired after end() is called
- All data flushed successfully
*/
writeStream.on("finish", () => {
  console.log("FINISH event fired");
});

/*
5️⃣ close
- File descriptor closed
*/
writeStream.on("close", () => {
  console.log("CLOSE event fired");
});

/*
❌ error
- Fired if writing fails
*/
writeStream.on("error", (err) => {
  console.error("ERROR:", err.message);
});
