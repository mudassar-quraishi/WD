const fs = require("fs");
console.log("Creating a file...");
fs.writeFile("output.txt","My name is Mudassar", ()=>{
    console.log("File created successfully");
    fs.readFile("output.txt", (err, data)=>{
        console.log(err, data.toString());
    })
});
console.log("File created successfully");
fs.appendFile("output.txt", "I am a software engineer", (err, data)=>{
    console.log(err, data);
})