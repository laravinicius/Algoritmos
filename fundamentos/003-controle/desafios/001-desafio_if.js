const nota = 8.99;

if (nota >= 9 && nota <= 10){
    console.log('A');
} else if (nota >= 7 && nota < 9){
    console.log('B');
} else if (nota >= 5 && nota < 7){
    console.log('C');
} else if (nota >= 4.5 && nota < 5){
    console.log('D');
} else if (nota >= 0 && nota <= 4.5){
    console.log('F');
} else {
    console.log('Nota inválida')
}