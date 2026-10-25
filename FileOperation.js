const fs = require("fs");
fs.writeFileSync("student.txt", "Hello Node.js");
console.log("File created successfully.");


let data = fs.readFileSync("student.txt", "utf8");
console.log("File content:", data);


fs.appendFileSync("student.txt", "\nWelcome to File Operations.");
console.log("Data appended successfully.");


fs.renameSync("student.txt", "student_new.txt");
console.log("File renamed successfully.");


if (fs.existsSync("student_new.txt")) {
    console.log("File exists.");
}


let info = fs.statSync("student_new.txt");
console.log("File size:", info.size, "bytes");


// fs.unlinkSync("student_new.txt");
// console.log("File deleted successfully.");