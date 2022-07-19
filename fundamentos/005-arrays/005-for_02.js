const notas = [7, 8, 3, 5, 10, 9, 8, 8];
let valores = ' ';
let indices = ' ';

// for each: 
for(let nota of notas){
    valores += nota + ' '; // acesando os valores do array
}
console.log(valores);

for (let indice in notas){
    indices += indice + ' '; // acessando os indices do array
}
console.log(indices);