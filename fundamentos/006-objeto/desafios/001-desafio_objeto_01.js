// objeto: data (dia/mes/ano)
// atributos: (dia/mes/ano)
//  metodo :exibir -> 'dia/mes/ano'
const data = {
    dia: 05,
    mes: 03, 
    ano: 2001,
    exibirData: function(){
        // return this.dia + '/' + this.mes + '/' + this.ano;
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
console.log(data.exibirData());