const chalk = require("chalk");

const nota = 4;

if(nota >= 7){
    console.log(chalk.green.bold("Parabéns! Aprovado!"));
} else if(nota >= 4) {
    console.log(chalk.yellow.bold("Em recuperação!"));
} else {
    console.log(chalk.red.bold("Reprovado!"));
}