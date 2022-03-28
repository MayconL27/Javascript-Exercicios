// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
var capturando = ""
function capturar() {
    capturando = document.querySelector('input#valor').value
    document.getElementById('valorDigitado').innerHTML = capturando  
}