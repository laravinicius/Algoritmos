// definir objeto mais "rico", mais complexos
const cliente = {
    nome: 'Vinicius',
    codigo: 1,
    vip: true,
    endereco:{ // posso ter objetos dentro de objetos
        logadouro: 'Rua A-Z',
        numero: 350,
        complemento: 'casa',
        pontosRef:[ // arrays dentro de objetos
            {nome:'Tereno Vazio', proximo:true}, // objeto dentro do array
            {nome:'Mercado', proximo:false}
        ] 
    },
    nomeFilhos:['Mateus', 'Anthony']
}
// acessar atributos dentro de objetos, dentro de arrays, dentro de objetos dentro de objetos
console.log(cliente.endereco.logadouro,'-', cliente.nomeFilhos[1]);
console.log(cliente.endereco.pontosRef[0].nome,'-', cliente.endereco.pontosRef[0].proximo);
