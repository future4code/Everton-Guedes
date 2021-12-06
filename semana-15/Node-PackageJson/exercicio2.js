// Crie uma aplicação Node que recebe uma string representando uma operação 
// matemática e dois valores numéricos. O retorno deverá ser o resultado da 
// operação selecionada utilizando os 2 valores fornecidos.

const resultado = process.argv[2]

let numero1 = Number(process.argv[3]) || 8
let numero2 = Number(process.argv[4]) || 13

const soma = (numero1, numero2) => {
    return (numero1 + numero2)
}

console.log(soma(numero1, numero2))
