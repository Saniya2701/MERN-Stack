const fs = require("fs");

const readableStream = fs.createReadStream("input.txt");

const writableStream = fs.createWriteStream("copy.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
    console.log("File copied successfully");
});