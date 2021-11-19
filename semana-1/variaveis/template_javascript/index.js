/*Questao 1. 
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
saida 10 10 5*/

/*Questoa2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
saida 10 10 10*/

/*Questao 3.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

o comando prompt interage com o usuário no console permitindo
que o mesmo coloque as informações solicitadas 
let p = prompt ("quantasHorasVoceTrabalhaPorDia")
let t = prompt ("quantoVoceRecebePorDia")
alert ("voceRecebe, ${t/p}, porHora")*/

let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)

/*no console do navegador foi impresso undefined e undefined devido
a não atribuição de valores conforme solicitado no enunciado do exercício*/

nome = prompt("Qual é o seu nome?") 
idade = prompt("Qual é a sua idade?")

/*no console do navefador foi impresso novamente undefined e undefined 
tendo em vista que não foram atribuídos valores a essas variáveis*/

console.log("Olá Everton, voce tem 30 anos")
console.log("Olá", nome, "você tem", idade, "anos")

let temCachorro = "Você tem cachorro?"
let eleEmalvado = "Ele é malvado?"
let sabeEscalarMuro = "Ele sabe escalar muro?"

let respostaCachorro = "Sim"
let respostaMalvado = "Sim"
let respostaEscalar = "Sim"

console.log(temCachorro, respostaCachorro)
console.log(eleEmalvado, respostaMalvado)
console.log(sabeEscalarMuro, respostaEscalar)

let a = 10
let b = 25
let c = 33

console.log(a, b, c)

a = prompt ("O novo valor de a é", b)
b = prompt ("O novo valor de b é", a)
