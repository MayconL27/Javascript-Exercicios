function calcular() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;

    var media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;

    alert(`A media dos valores é: ${media}`);
}