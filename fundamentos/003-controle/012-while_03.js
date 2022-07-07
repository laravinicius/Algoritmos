const futuro = Date.now() + 1000;
let qtd = 0;

while (Date.now() < futuro) {
    qtd++;
}
console.log(qtd);