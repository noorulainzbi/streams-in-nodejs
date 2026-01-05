// 📝 Writing to a File in Node.js (Using File Descriptor)
// To write data to a file using low-level fs.write or fs.writeSync, you must first open the file in write mode.

// ✅ Step-by-Step
// 1️⃣ Open the File in Write Mode
import fs from "fs";
const fd = fs.openSync("open.txt", "w");
// // "w" ensures it's writable
// Mode "w": Creates the file if it doesn’t exist, and truncates it (clears content) if it does.

// 2️⃣ Write to the File (Async)
fs.write(fd, "Hello World", (err, bytesWritten, str) => {
  console.log("Error:", err);
  console.log("Bytes Written:", bytesWritten);
  console.log("String Written:", str);
});
// bytesWritten: How many bytes were actually written.
// str: The actual string written.

// 3️⃣ Or Use Sync Version
const bytes = fs.writeSync(fd, "Hello Sync World");
console.log("Bytes Written (Sync):", bytes);

// ⚠️ Don't Forget
// Always close the file after writing (optional but good practice):
fs.closeSync(fd);
