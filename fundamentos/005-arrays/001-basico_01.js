// indice       0    1   2    3    4    5  
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

// posso mudar os valores dos elementos de um array const, mas nao posso mudar o valor da const notas, por exemplo notas = 10; ou notas = 'Texto';

console.log(notas);
console.log(notas[3]);
console.log(notas[6]);

console.log(notas[4]);
notas[4] = 8.7;
console.log(notas[4]);

console.log(notas);