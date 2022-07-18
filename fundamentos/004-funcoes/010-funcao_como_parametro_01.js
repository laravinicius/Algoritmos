function executar (parametro){
    if (typeof parametro === 'function'){
        console.log(parametro())
    }
}
function bomDia(){
    return 'Bom dia';
}
executar(bomDia);