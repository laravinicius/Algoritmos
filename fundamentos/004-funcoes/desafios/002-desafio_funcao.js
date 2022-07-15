// inserir o parametro como a nota em numero e receber o valor em conceito 
function conceito(c) {
    
    if (Math.ceil(c) === 10) {
        return 'A+';
    } else if (Math.ceil(c) === 9) {
        return 'A';
    }
    else if (Math.ceil(c) === 8) {
        return 'B+';
    }
    else if (Math.ceil(c) === 7) {
        return 'B';
    }
    else if (Math.ceil(c) === 6) {
        return 'C+';
    }
    else if (Math.ceil(c) === 5) {
        return 'C';
    }
    else if (Math.ceil(c) === 4) {
        return 'D+';
    }
    else if (Math.ceil(c) === 3) {
        return 'D';
    }
    else if (Math.ceil(c) === 2) {
        return 'E+';
    }
    else if (Math.ceil(c) === 1) {
        return 'E';
    }
    else if (Math.ceil(c) === 0) {
        return 'F';
    }
    else {
        return 'Nota inválida';
    }
}
console.log('O conceito do aluno é', conceito(0));