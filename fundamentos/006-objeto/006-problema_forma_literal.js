// forma "literal" de instanciar objetos
// problema - muito código repitido, 
const data1 = {
    dia: 05,
    mes: 03, 
    ano: 2001,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const data2 = {
    dia: 06,
    mes: 04, 
    ano: 2002,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const data3 = {
    dia: 07,
    mes: 05, 
    ano: 2003,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
console.log(data1.exibirData());
console.log(data2.exibirData());
console.log(data3.exibirData());