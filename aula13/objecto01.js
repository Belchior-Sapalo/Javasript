var amigo = {
nome:"Belchior", altura:1.80,
idade:18,
sexo:"M",
crescer(a=0){
console.log("Cresceu")
this.altura +=a
 }
}
amigo.crescer(2)
console.log(amigo.altura)