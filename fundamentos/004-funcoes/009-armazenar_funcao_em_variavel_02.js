function subtrair (a, b){
    return a - b;
}

// funcao já nomeada
let subtracao = subtrair;
console.log(subtrair(2, 1));
console.log(subtracao(2, 1));

subtracao = 3;
console.log(subtracao);

