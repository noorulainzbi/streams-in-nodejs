import fs from "fs";

// Time 550ms
// console.time();
// const fd = fs.openSync("open.txt", "a");
// for (let i = 1; i <= 100000; i++) {
//   fs.writeSync(fd, `${i} `);
// }
// fs.closeSync(fd);
// console.timeEnd();
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
