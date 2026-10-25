const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", {
    encoding: "utf8"
});

readableStream.on("data", (data) => {
    console.log(data);
});

readableStream.on("end", () => {
    console.log("Finished reading file");
});

readableStream.on("error", (err) => {
    console.log(err.message);
});