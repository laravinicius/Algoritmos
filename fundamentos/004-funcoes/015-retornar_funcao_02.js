function retornaFuncao() {
    return function (){
        return'Boa tarde';
    }
}

console.log(retornaFuncao);
console.log(retornaFuncao()); //retornara funcao
console.log(retornaFuncao()()); // retornar o resultado da funcao dentro da funcao 