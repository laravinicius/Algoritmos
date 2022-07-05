const t1 = false;
const t2 = false;

let comprarTv50 = t1 && t2;
console.log('Vamos comprar a Tv de 50"?', comprarTv50); //and

let comprarTv32 = t1 !== t2;
console.log('Vamos comprar a Tv de 32"?', comprarTv32); //XOR

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete"?', tomarSorvete); //or

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa"?', ficarEmCasa); //not
