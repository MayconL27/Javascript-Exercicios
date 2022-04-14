function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Erro')    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 18) {
                //Jovem
                img.setAttribute('src','img/jovemH.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','img/adultoH.png')
            } else {
                //Idoso
                img.setAttribute('src','img/idosoH.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 18) {
                //Jovem
                img.setAttribute('src','img/jovemM.png')
            } else if ( idade < 60) {
                //Adulto
                img.setAttribute('src','img/adultoM.png')
            } else {
                //Idoso
                img.setAttribute('src','img/idosoM.png')
            }
        }
        res.style.textAlign = 'center' // centralizar texto do resultado
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}