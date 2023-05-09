    var valor = window.document.getElementById("valor")
    var res = window.document.getElementById("resultado")
    var tab = window.document.getElementById("tabela")
    var fim = window.document.getElementById("fim")
    var valores = []

function adicionar(){ 
    res.innerHTML = ""
    var indice = valores.indexOf(Number(valor.value))

    if(Number(valor.value) < 1 || Number(valor.value) > 100 || indice != -1){
    alert("Valor inválido ou já existente. Verifique e tente novamente")
        } else {
            var n = Number(valor.value)
            valores.push(n)
            var iten = window.document.createElement("option")
            iten.text = ` O valor ${n} foi adicionado`
            tab.appendChild(iten)
            
        }
        valor.value = ""
        valor.focus()
            
}

function finalizar(){
    if(valores.length == 0){
        alert("Adicione valores")} else
        {
            res.innerHTML = `Ao todo temos ${valores.length} elementos<br> <br>`

    let maior = valores[0]
    let menor = valores[0]
    var soma = 0
    
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos]>maior){maior = valores[pos]}
        if(valores[pos]<menor){menor = valores[pos]}
    }

    var med = soma/valores.length

    res.innerHTML += `O maior valor é: ${maior} <br><br>`

    res.innerHTML += `O menor valor é: ${menor}<br><br>`

    
    res.innerHTML += `A média dos valores digitados é: ${med}`
}
valor.focus()
    
}