import fs from "fs";
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
// Task 1
readStream.on("data", (chunk) => {
  fs.writeFileSync("acbd.txt", chunk);
  readStream.pause();
});
//Task 2
let readCount = 0;
readStream.on("data", (chunk) => {
  readCount++;
  if (readCount === 1) {
    fs.writeFileSync("base64.txt", chunk);
  } else {
    readStream.pause();
    setTimeout(() => {
      readStream.resume();
      fs.appendFileSync("base64.txt", chunk);
    }, 500);
  }
});

readStream.on("data", (chunk) => {
  const { readableHighWaterMark, bytesRead } = readStream;
  if (readableHighWaterMark === bytesRead) {
    fs.writeFileSync("base64.txt", chunk);
  } else {
    readStream.pause();
    setTimeout(() => {
      readStream.resume();
      fs.appendFileSync("base64.txt", chunk);
    }, 500);
  }
});
