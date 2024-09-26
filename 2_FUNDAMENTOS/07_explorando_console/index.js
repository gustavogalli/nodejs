// vários valores
const x = 10;
const y = "Gustavo";
const z = [1, 2];
console.log(x, y, z);

// contagem de valores
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

// variável entre string
console.log("O nome é %s", y); // s de STRING

// limpar o console
setTimeout(() => {
    console.clear();
}, 2000);