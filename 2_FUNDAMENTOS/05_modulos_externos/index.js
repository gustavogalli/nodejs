const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args["name"]
const profissao = args["profissao"];
console.log(`${nome} é um ${profissao}.`);