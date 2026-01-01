import fs from "fs";

console.time();
let readCount = 0;
const readStream = fs.createReadStream(
  "C:\\Users\\Mehmood\\Downloads\\🚀 🔥 HTML Complete Course (2024) for Beginners _ Projects _ Notes _ Github _ Certification.mp4",
  { highWaterMark: 1 * 1024 * 1024 }
);
readStream.on("data", (chunk) => {
  readCount++;
  console.log(chunk);
  // fs.appendFileSync("video.mp4", chunk);
});
readStream.on("end", () => {
  console.log({ readCount });
  console.timeEnd();
});

// task: 2
const readableStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
let readCountOfChars = 0;
readableStream.on("data", (chunk) => {
  readCountOfChars++;
});
readableStream.on("end", () => {
  console.log(readCountOfChars);
});
