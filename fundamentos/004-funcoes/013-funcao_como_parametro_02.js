function executar (fn, n1, n2){ // recebe 3 parametros, o 1 é uma funcao, os outros 2 são os numeros das operacoes
    if (typeof fn === 'function'){ // verificando se o parametro passado é uma funcao
        console.log(fn(n1, n2)) // aqui passa o parametro para a funcao somar
    }
}
function somar (a = 0, b = 0){
    return a + b;
}
function subtratir(a, b){
    return a - b;
}
function multiplicar (a, b){
    return a * b;
}
function dividir (a, b){
    return a / b;
}
executar(somar, 1, 2);
executar(subtratir, 1, 2);
executar(multiplicar, 1, 2);
executar(dividir, 1, 2);