import fs from "fs/promises";

let data = await fs.readFile("output.txt");
console.log(data.toString());

await fs.writeFile("output.txt", "this is amazing");
data = await fs.readFile("output.txt");
console.log(data.toString());
