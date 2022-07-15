// calcular a nota fazendo a média das 2 maiores notas
// >= 7.0 ap
// nota < 7 || >= 4 recuperacap
// nota < 4 reprovado

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function menorValor(n1, n2){
    if(n1 <= n2){
        return n1;
    } else {
        return n2;
    }
}

function media(n1, n2, n3){
    const menorNota = menorValor(n1, menorValor(n2, n3))

    if(menorNota === n1){
        return (n2 + n3)/2
    } else if (menorNota === n2){
        return (n1 + n3)/2
    } else {
        return (n2 + n1)/2
    }
}

function mediaParaStatus(media){
    if (media >= 7){
        return 'Aprovado';
    } else if (media >= 4){
        return 'Recuperacao';
    } else {
        return 'reprovado';
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);

console.log('O resultado final do aluno é de:', statusFinal);
