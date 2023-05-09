function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute("src", "manha.png")
            }else if(idade >= 12 && idade < 18){
                //adolescente
                img.setAttribute("src", "tarde.png")
            }else if(idade >= 18 && idade  < 30){
                //jovem
                img.setAttribute("src", "noite.png")
            }else if(idade >= 30 && idade < 60){
                //adulto
                img.setAttribute("src", "manha.png")
            }else {
                //idoso
                img.setAttribute("src", "tarde.png")
            }

        }else{
            genero = "Mulher"
            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute("src", "noite.png")
            }else if(idade >= 12 && idade < 18){
                //adolescente
                img.setAttribute("src", "manha.png")
            }else if(idade >= 18 && idade  < 30){
                //jovem
                img.setAttribute("src", "tarde.png")
            }else if(idade >= 30 && idade < 60){
                //adulto
                img.setAttribute("src", "noite.png")
            }else {
                //idoso
                img.setAttribute("src", "manha.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `<p>Detectamos ${genero} com ${idade}</p>`
        res.appendChild(img)
    }
}