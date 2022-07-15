// funcao com parametro e com retorno
function somar(a, b){
    return a + b;
}
console.log(somar (30 , 50));

// funcao com parametro sem retonro
function exibirMultiplicacao(a, b){
    console.log(a * b);
}
exibirMultiplicacao(2, 3);

// funcao sem parametro e com rentoro
function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual());

// funcao sem parametro e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getHours()); // hora apernas em horas
}
exibirHoraAtual();