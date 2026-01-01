import fs from "fs";

const stream = fs.createReadStream("chars.txt", {
  highWaterMark: 4, // max bytes read per chunk
  encoding: "utf-8", // convert Buffer → string
  autoClose: false, // we manually close the stream
  emitClose: true, // emit 'close' event
  start: 3, // start reading from byte index 3
  end: 15, // stop reading at byte index 15
});

/*
1️⃣ open
- Fired when Node successfully opens the file
- Gives you the file descriptor (fd)
*/
stream.on("open", (fd) => {
  console.log("OPEN event fired, fd:", fd);
});

/*
2️⃣ ready
- File is ready to be read
- Internal buffers and state are prepared
*/
stream.on("ready", () => {
  console.log("READY event fired");
});

/*
3️⃣ data
- Fired every time a chunk is read from the file
- Chunk size depends on highWaterMark
*/
stream.on("data", (chunk) => {
  console.log("DATA event:", chunk);
});

/*
4️⃣ end
- Fired when no more data is left to read
- Does NOT mean the file is closed
*/
stream.on("end", () => {
  console.log("END event fired");

  // since autoClose = false, we must close manually
  stream.close();
});

/*
5️⃣ close
- Fired when the file descriptor is closed
- Happens after end OR after error
*/
stream.on("close", () => {
  console.log("CLOSE event fired");
});

/*
❌ error (can happen anytime)
- Fired if something goes wrong (file not found, permission issue, etc.)
*/
stream.on("error", (err) => {
  console.error("ERROR event:", err.message);
});
