// dupla negação
// converte tipos não originalmente TRUE ou FALSE para true e false (strings, valores, etc...)
console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!!false);

console.log('=================');
// strings vazias == false, strings com conteudo == true
console.log('Texto!');
console.log(!'Texto!');
console.log(!!'Texto!');

console.log('=================');
// strings vazias == false, strings com conteudo == true
console.log(!'');
console.log(!!'');

console.log('=================');
// qualquer valor que não seja 0, vai ser avaliado como TRUE, caso seja avaliado como TRUE ou FALSE
console.log(!!1);
console.log(!!0);
console.log(!!-1);
console.log(!!-0.000000001);