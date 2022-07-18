// definir valor padrao para um parametro, para o parametro nao receber undefined
function somar(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4, 5)); // vai ignorar os valores excedentes
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); 
console.log(somar(1, 2)); 
console.log(somar(1)); 
console.log(somar());