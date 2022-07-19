function somar(a){
    return function(b){
        return a + b;
    }
}

console.log(somar(4)(5));

const somarMais10 = somar(10);

console.log(somarMais10(5));