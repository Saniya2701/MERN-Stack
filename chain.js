var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"))
    .on("finish", function() {
        console.log("File Compressed.");

        fs.createReadStream("input.txt.gz")
            .pipe(zlib.createGunzip())
            .pipe(fs.createWriteStream("output.txt"))
            .on("finish", function() {
                console.log("File Decompressed.");
            });
    });