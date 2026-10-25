const { Transform } = require("stream");

const upperCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});

upperCaseStream.on("data", (data) => {
    console.log(data.toString());
});

upperCaseStream.write("hello node.js");
upperCaseStream.write("this is a transform stream");
upperCaseStream.end();