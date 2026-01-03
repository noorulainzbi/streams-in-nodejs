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
