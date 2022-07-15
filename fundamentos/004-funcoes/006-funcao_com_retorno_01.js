function sempreRetorna1() {
    return 100; // depois do return nada é executado
}

function textoOuNumero(retornaTexto) {
    return retornaTexto ? 'Sou um texto' : 123;

    // if(retornaTexto) {
    //     return 'Sou um texto';
    // } else {
    //     return 123;
    // }
}

let valor = sempreRetorna1() + 899;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));