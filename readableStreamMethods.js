import fs from "fs";

const stream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
  encoding: "utf-8",
  autoClose: false, // if true the stream will be clode automatical else you have to manually close
  emitClose: true, // if true fires the close event
  start: 3, //start → where reading begins
  end: 15, //end → last byte to be read
});

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("END event fired");
  stream.close();
});

stream.on("close", () => {
  console.log("CLOSE event fired");
});
