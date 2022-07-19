const numeros = [10, 20, 30, 40, 50, 60];

function elementos(el, index, array){
    console.log(el, index, array);
}
numeros.forEach(elementos);



numeros.forEach(function(el, _, array){
    console.log(el, array);
})
