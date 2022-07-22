class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano
    }
    exibirData = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(05, 03, 2001);

console.log(data1.exibirData());