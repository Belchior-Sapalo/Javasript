    let num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")
    function tabuada(){
     num.innerHTML = ""
     tab.innerHTML = ""   
    if(num.value.length == 0){
    
        alert("Por favor, digite um número!")  
        
    } else{
        let n = Number(num.value)
        var c = 1
        while (c <= 10){
            
            let iten = window.document.createElement("option")
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab${c}`
            tab.appendChild(iten)
            c++
            
        }
    }
    
}


