var nome = "caneta"
let quantidade = 10
var preco = 0.5
let imposto = 1.5
{
    console.log("Objeto:", nome)
    console.log("Quantidade", quantidade)
    console.log("Valor:", preco)
    console.log("Imposto:", imposto)
    console.log("Valor total:", (preco + imposto) * quantidade)
}
{   //posso criar variáveis sem declarar o "var" ou "let"
    //explicação de "let" vem depois
    nome = "caneta2"
    console.log(nome)
}