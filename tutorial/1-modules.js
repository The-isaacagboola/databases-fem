const os = require("os");

// console.log(os.version(), os.homedir());

console.log(os.userInfo());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
