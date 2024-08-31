const path = require("path");

// console.log(path.sep); // Show the platform-specific file separator. '\' or '/'

const targetFilePath = path.join("inside", "target.txt");

// console.log(targetFilePath)

const basePath = path.basename(targetFilePath); //returns the base of the class.... in this case "target.txt"
console.log(basePath);

const absolute = path.resolve(__dirname, "inside", "target.txt");

console.log(absolute);
