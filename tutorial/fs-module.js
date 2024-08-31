const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./tutorial/content/firstFile.txt", "utf8");

const second = readFileSync("./tutorial/content/secondFile.txt", "utf8");

console.log(__dirname, __filename);
console.log(first, second);
