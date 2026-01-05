// 📁 Handling Files Using Promises in Node.js
// Using the fs/promises module in Node.js allows you to handle files with modern async/await syntax — making the code more readable and clean compared to callback-based methods.

// 📌 Key Concept
// Instead of directly getting a file descriptor (fd), you get a FileHandle object, which contains the descriptor internally.
// This object gives you access to async methods like .read(), .write(), and .close().

// ✅ Example: Reading and Writing a File
import fs from "fs/promises";
// 1️⃣ Open the file
const fileHandle = await fs.open("text.txt", "r+"); // "r+" = read and write

// 2️⃣ Read from file
const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});
console.log("Read Buffer:", buffer.toString());
console.log("Bytes Read:", bytesRead);

// 3️⃣ Write to file
const { buffer: writtenBuffer, bytesWritten } = await fileHandle.write("hii");
console.log("Written Buffer:", writtenBuffer.toString());
console.log("Bytes Written:", bytesWritten);

// 4️⃣ Close the fileawait
fileHandle.close();

// 🧠 Notes:
// fs.open(path, mode) returns a FileHandle object (not fd directly).
// You access the file descriptor via fileHandle.fd if ever needed.
// Always close the file to release the resource — especially when working with large apps or many files.
