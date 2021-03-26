// Adicionar os números e operadores no display da calculadora
function adicionar(num) { 
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
}
// Limpa todos os dados no display da calculadora
function limpar() {
    let resultado = document.getElementById('resultado').innerHTML = "";
}
// Deleta o último número digitado
function del() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substr(0, resultado.length -1); //Irá mostrar todos os números do display, exceto o último
}
// Calcula os números que estão no display

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}