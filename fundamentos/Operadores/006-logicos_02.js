const t1 = true;
const t2 = true;

let comprarTv50 = t1 && t2;
console.log('Vamos comprar a Tv de 50"?', comprarTv50); //and

let comprarTv32 = t1 !== t2;
console.log('Vamos comprar a Tv de 32"?', comprarTv32); //XOR uma coisa ou outra coisa não os 2

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete"?', tomarSorvete); //or uma coisa ou outro (podem ser os 2)

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa"?', ficarEmCasa); //not
