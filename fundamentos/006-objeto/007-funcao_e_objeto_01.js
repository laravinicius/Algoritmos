// resolver o problema anterior
function data(dia, mes, ano){
    return {
        dia: dia,
        mes: mes, 
        ano: ano,
        exibirData: function(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}
const data1 = data(05, 03, 2001);
const data2 = data(06, 04, 2002);
const data3 = data(07, 05, 2003);

console.log(data1.exibirData());
console.log(data2.exibirData());
console.log(data3.exibirData());