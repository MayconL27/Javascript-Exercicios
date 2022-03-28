// 3. Faça um Programa que peça dois números e imprima a soma.
function calcular() {
    var capN1 = document.querySelector('input#n1').value
    var capN2 = document.querySelector('input#n2').value

    var soma = Number(capN1)+ Number(capN2)

    document.getElementById('soma').innerHTML = soma

}