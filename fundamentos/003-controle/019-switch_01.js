let nota = 7.9;

switch (Math.ceil(nota)) {
    
    case 10:case 9:case 8:case 7:
        console.log('Parabéns');
        break;
    case 6:case 5:
        console.log('Recuperação');
    case 4:case 3:case 2:
        console.log('reprovado');
        break;
    case 1:case 0:
        console.log('Muito reprovado');
        break;
    default:
    console.log('Nota inválida');
}