const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello from Node.js\n");
writableStream.write("This data is written using a writable stream.\n");

writableStream.end();

writableStream.on("finish", () => {
    console.log("Data written successfully");
});

writableStream.on("error", (err) => {
    console.log(err.message);
});