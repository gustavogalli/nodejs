const fs = require("fs"); // importanto módulo file system

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
