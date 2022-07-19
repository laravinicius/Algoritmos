const numeros = [1, 2, 3, 4, 5, 4];

numeros.push(6);
numeros[0] = 100;


console.log(numeros.indexOf(4)); // mostrar u numero do index do valor
console.log(numeros.includes(10)); // verificar se existe um valor dentro do array
console.log(numeros.join(' - ')); // concatenar caracteres ao array
console.log(numeros);


const numeros2 = numeros.concat(7, 8, 9); // cria um novo array concatenando valores ao array inicial
console.log(numeros2);