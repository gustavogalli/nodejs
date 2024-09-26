const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual sua idade?\n", (idade) => {
    console.log(idade);
    readline.close();

});