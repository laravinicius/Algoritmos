const produto = { // nome do objeto
    nome: 'Ipad', // atributos do objeto
    valor: 5000,
    desconto: 0.15,
    precoFinal: function (){ 
        return this.valor * (1 - this.desconto); // acessar atributos do própio objeto = this.atributo
    }
};
console.log(produto.nome);
console.log(produto.precoFinal());