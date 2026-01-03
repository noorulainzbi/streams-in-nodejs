import { createReadStream } from "fs";

const readStream = createReadStream("C:\\Users\\Mehmood\\Downloads\\HTML.mp4");
readStream.pipe(process.stdout);



