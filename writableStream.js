import fs from "fs";
const readStream = fs.createReadStream("chars.txt");
const writeStream = fs.createWriteStream("write.txt", { highWaterMark: 4 });
console.log(writeStream.writableHighWaterMark);
readStream.on("data", (chunk) => {
  console.log(chunk);
  const ok = writeStream.write(chunk);
  if (!ok) {
    console.log(writeStream.bytesWritten);
    readStream.pause();
  }
});
writeStream.on("drain", () => {
  readStream.resume();
});
