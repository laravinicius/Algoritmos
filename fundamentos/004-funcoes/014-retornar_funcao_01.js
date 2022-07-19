function retornar() {
    function bomDia(){
        return 'Bom dia!!';
    }
    return bomDia;
}

console.log(retornar()); // retornar a funcao dentro da funcao
console.log(retornar()()); // retornando o resultado da funcao dentro da funcao 