function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var corpo = window.document.getElementsByTagName("body")[0]

    var min = data.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos</p>`



    if(hora >= 0 && hora < 12) {
        img.src = "manha.png"
        corpo.style.background = "#e2cc9a"
    } else if(hora >= 12 && hora < 18){
        img.src = "tarde.png"
        corpo.style.background = "#1e3a6c"
    }else if(hora>=18 && hora<23){
        img.src = "noite.png"
        document.body.style.background = "#4b758d"
    }else{
        console.log("Hora inválida")
    }
}

