const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/firstFile.txt", "utf8");

const second = readFileSync("./content/secondFile.txt", "utf8");

console.log(first, second);

// writeFileSync(
//   "./content/writtenFile.txt",
//   `I am using template string to merge my first and seconf file giving
//     ${first} and Second: ${second}`
// ); //here
// the mothod above will clear the content of the destination if ir exist and create it if it doesnt.

//but if you want to append to an existing content; you add another parameter as seen below;

writeFileSync(
  "./content/SecondwrittenFile.txt",
  `I am using template string to merge my first and seconf file giving
      ${first} and Second: ${second}`,
  { flag: "a" }
);
