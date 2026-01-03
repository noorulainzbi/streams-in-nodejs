import { spawn } from "child_process";
import { createWriteStream } from "fs";

const writeStream = createWriteStream("video.mp4");

const childProcess = spawn("node", ["childProcess.js"]);

childProcess.stdout.pipe(writeStream);
