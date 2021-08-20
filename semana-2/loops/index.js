// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS
// 1. O laço for está simplificando a escrita de laços do código e, está somando
//    a a variável 5. 10

// 2.
// a) [19, 21, 23, 25, 27, 30]
// b) Sim. 

// 3.

// EXERCÍCIOS DE ESCRITA DE CÓDIGOS
// 1.

const quantidadeAnimaisEstimaçao = Number(prompt("Quantos bichos de estimação você tem?"))
let i = 0 
const animais = []
if (quantidadeAnimaisEstimaçao === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
while(i < quantidadeAnimaisEstimaçao){
    const nomes = prompt("Qual é o nome dos bichinhos?")
    i = i+1
    animais.push(nomes)
    console.log(nomes)
}

console.log(animais)

// 2.


