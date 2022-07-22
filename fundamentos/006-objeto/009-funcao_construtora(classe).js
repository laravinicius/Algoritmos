//funcao construtora -> objeto
function Data(dia, mes, ano){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};
const data1 = new Data(20, 12, 2000);
const data2 = new Data(21, 11, 2001);
const data3 = new Data(22, 10, 2002);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());