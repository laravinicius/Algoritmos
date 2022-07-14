// exemplo de uma função que não retonra nada

function semRetorno(){
    console.log('Funcao foi chamada');
}
let a = 3;
let b = a * 7 + 10;
let c = semRetorno();

console.log(a, b, c);
