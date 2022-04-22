function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passos = document.querySelector('input#passos')
    var res = document.querySelector('div#res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossivel contar, Faltam dados!'
    } else {
        res.innerHTML = 'contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido!')  
            p = 1 
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
       
    }    
}