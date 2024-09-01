const { readFile, writeFile } = require("fs");

readFile("./content/firstFile.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
