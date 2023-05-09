function contar(){
    var ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("Erro, faltam dados")
        res.innerHTML = "Impossível contar"
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert("Passo inválido. Considerando Passo = 1")
            p +=1
        }

    if(i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `  ${c} \u{1f449}`
        }
    } else {
        for(var c = i; c >= f; c -= p){
            res.innerHTML += `  ${c} \u{1f449}`
        }
        

    }
        res.innerHTML += `\u{1f3c1}`
    }
    
}