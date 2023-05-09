/*var a = [2,1,0,9]
console.log(a)
console.log(a.sort())
for(var pos=0;pos < a.length;pos++){
    console.log(` A posição ${pos} tem o valor ${a[pos]}`)
}*/
var a = [0,5,8,97,9]
console.log(a.sort())

/*console.log(a)
for(let pos in a){
    console.log(` A posição ${pos} tem o valor ${a[pos]}`)
}*/

var pos = a.indexOf(1)
if(pos < 0){
    console.log(`O valor inseridonão faz parte do array`)
}else{
    console.log(`A posição do valor é ${pos}`)
}
