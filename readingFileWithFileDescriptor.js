import fs from "fs";

const fd = fs.openSync("open.txt");
const buffer = Buffer.alloc(10);
fs.read(
  fd,
  { buffer, offset: 0, length: 10, position: 1 },
  (err, bytesRead, buffData) => {
    console.log(err);
    console.log(bytesRead);
    console.log(buffData);
    console.log(buffData.toString());
  }
);
