import fs from "fs";

console.time();
// for (let i = 1; i <= 5000; i++) {
//   if (i == 1) {
//     fs.writeFile("numbers.txt", `${i.toString()}\n`, (err) => {
//       if (err) throw err;
//       if (i === 5000) {
//         console.timeEnd();
//       }
//     });
//   } else {
//     fs.appendFile("numbers.txt", `${i.toString()}\n`, (err) => {
//       if (err) throw err;
//       if (i === 5000) {
//         console.timeEnd();
//       }
//     });
//   }
// }
// Time 800ms
// for (let i = 1; i <= 5000; i++) {
//   if (i == 1) {
//     fs.writeFileSync("numbers.txt", `${i.toString()}\n`);
//   } else {
//     fs.appendFileSync("numbers.txt", `${i.toString()}\n`);
//   }
// }
// console.timeEnd();

// Time 65ms
// const writeStream = fs.createWriteStream("streamsNumber.txt");
// for (let i = 1; i <= 5000; i++) {
//   writeStream.write(`${i}, `);
// }
// writeStream.end();
// writeStream.on("finish", () => {
//   console.timeEnd();
// });

/***************************** ONE LAKH NUMBERS *******************************/
// Time 16sms
// for (let i = 1; i <= 100000; i++) {
//   if (i == 1) {
//     fs.writeFileSync("numbers.txt", `${i} `);
//   } else {
//     fs.appendFileSync("numbers.txt", `${i} `);
//   }
// }
// console.timeEnd();

// Time 600ms
// const writeStream = fs.createWriteStream("streamsNumber.txt");
// for (let i = 1; i <= 100000; i++) {
//   writeStream.write(`${i}, `);
// }
// writeStream.end();
// writeStream.on("finish", () => {
//   console.timeEnd();
// });

// Time 550ms
// const fd = fs.openSync("open.txt", "a");
// for (let i = 1; i <= 100000; i++) {
//   fs.writeSync(fd, `${i} `);
// }
// fs.closeSync(fd);
// console.timeEnd();

/************ Time 45ms  ****************/
const fd = fs.openSync("num.txt", "a");
const bufferSize = 16 * 1024;
let buffer = Buffer.alloc(bufferSize);
let offset = 0;
let data = "";

for (let i = 1; i <= 100000; i++) {
  data = `${i} `;
  offset += buffer.write(data, offset);
  const dataSize = Buffer.byteLength(data);
  if (offset + dataSize >= buffer.byteLength) {
    fs.writeSync(fd, buffer.subarray(0, offset));
    offset = 0;
  }
}
if (offset > 0) {
  fs.writeSync(fd, buffer.subarray(0, offset));
  offset = 0;
}
fs.closeSync(fd);
console.timeEnd();
// for (let i = 1; i <= 10; i++) {
//   if (data.length + offset >= buffer.byteLength) {
//     fs.writeSync(fd, buffer.subarray(0, offset));
//     offset = 0;
//   } else {
//     data = `${i} `;
//     offset += buffer.write(data, offset);
//   }
// }

// // write the remaining data
// if (offset > 0) {
//   fs.writeSync(fd, buffer.subarray(0, offset));
//   offset = 0;
// }
// // console.log(data);

// fs.closeSync(fd);
// console.timeEnd();

/*
let b1 = Buffer.alloc(12);
let off = b1.write("Hello", 0);
off += b1.write("World", 5);
console.log(off);

console.log(b1);
console.log(b1.byteLength);
console.log(off + "12".length >= b1.byteLength);
*/
