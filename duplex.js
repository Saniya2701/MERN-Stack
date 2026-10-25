const { Duplex } = require("stream");

const duplexStream = new Duplex({
    read(size) {
        this.push("Hello from readable side\n");
        this.push(null);
    },
    write(chunk, encoding, callback) {
        console.log("Received:", chunk.toString());
        callback();
    }
});

duplexStream.on("data", (data) => {
    console.log("Read:", data.toString());
});

duplexStream.write("Hello from writable side");
duplexStream.end();