import fs from "fs";

function streamFileWithProgress(filePath, highWaterMark) {
  const stats = fs.statSync(filePath);
  const fileSize = stats.size;
  const readStream = fs.createReadStream(filePath, { highWaterMark });

  let bytesRead = 0;
  let readCount = 0;
  let barWidth = 30;
  readStream.on("data", (chunk) => {
    readCount++;

    bytesRead += chunk.length;
    let percentage = Math.floor((bytesRead / fileSize) * 100);
    let filled = Math.floor((percentage / 100) * barWidth);
    const empty = barWidth - filled;
    const bar = "█".repeat(filled) + " ".repeat(empty);
    process.stdout.write(`\r[${bar}] ${percentage}%`);
  });
  readStream.on("end", () => {
    console.log("\nreading done");
  });
}
streamFileWithProgress("video.mp4", 100 * 1024 * 1024);
