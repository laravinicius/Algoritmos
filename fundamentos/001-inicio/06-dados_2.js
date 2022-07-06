//declaração de variáveis em JS
//var ou let + identificador (nome da variavel) = valor da variavel
//var nomeObjeto = "Objeto 1"
let objeto = "caderno"
let categoria = "papelaria"
let valor = 19.90
let desconto = 0.4
let valorComDesconto = valor * (1-desconto)

console.log("O objeto " + objeto + 
            ", da categoria " + categoria + 
            ", de valor " + valor + 
            " está com 40% de desconto, agora custando "+ valorComDesconto)
