let temDinheiro = true;
let estaEnsolarado = false;
let carroNaGaragem = true;

let resultadoE = '#1 - (AND) Vai pro shopping? '; // E comercial &&
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = '#2 - (OR) Vai pro shopping? '; //PIPE ||
resultadoOu += estaEnsolarado || carroNaGaragem;
console.log(resultadoOu);

console.log('===============')

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('===============')

console.log('Não verdadeiro ' + !true);
console.log('Não falso ' + !false);