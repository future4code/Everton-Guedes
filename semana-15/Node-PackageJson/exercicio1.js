// a) Responda como comentário no seu código: como fazemos para acessar os 
// parâmetros passados na linha de comando para o Node?

// R: através de process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes 
// valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2] || "Everton"
const idade = Number(process.argv[3]) || 31


console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const anosAdicionais = 7
const idadeFutura = (idade + anosAdicionais)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`)