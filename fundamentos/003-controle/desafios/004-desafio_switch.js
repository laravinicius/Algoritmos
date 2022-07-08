// A    -> 10
// A+   -> 9
// B    -> 8
// B+   -> 7
// C    -> 6
// C+   -> 5
// D    -> 4
// D+   -> 3
// E    -> 2
// E+   -> 1
// F    -> 0

let notaL = 'sd';
let notaN;

switch (notaL) {
    case 'A+':
        notaN = 10;
        console.log(notaN);
        break;
    case 'A':
        notaN = 9;
        console.log(notaN);
        break;
    case 'B+':
        notaN = 8;
        console.log(notaN);
        break;
    case 'B':
        notaN = 7;
        console.log(notaN);
        break;
    case 'C+':
        notaN = 6;
        console.log(notaN);
        break;
    case 'C':
        notaN = 5;
        console.log(notaN);
        break;
    case 'D+':
        notaN = 4;
        console.log(notaN);
        break;
    case 'D':
        notaN = 3;
        console.log(notaN);
        break;
    case 'E+':
        notaN = 2;
        console.log(notaN);
        break;
    case 'E':
        notaN = 1;
        console.log(notaN);
        break;
    case 'F':
        notaN = 0;
        console.log(notaN);
        break;
    default:
        console.log('Nota inválida');
}