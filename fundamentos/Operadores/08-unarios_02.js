let a = 1;
let b = 2;

// console.log(++a === b++); 
// ele executa ++a -> === -> b++, por isso o resultado é TRUE **CÓDIGO CONFUSO**
// preferível usar um código com mais linhas mas que seja mais claro, sem confusões
// qantidade de linhas não é o fator principal
a++;
console.log(a === b);
b++;