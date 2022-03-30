function exibir() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#4169E1'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#F4A460'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#4B0082'
    }
}