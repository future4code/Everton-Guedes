// ----------------------> Exemplos <---------------------------

console.log('Olá, Maryam!')

/*Exercicio 1. 
false, false, true e boolean*/

/*Exercicio 2. 
será impresso no console duas Strings porque a saída do 
prompt é interpretada como sendo String, devido a não 
conversão String para Número no código.

/*Exercicio 3.
ele deve escrever o código de conversão de string para número.
// ----------------------> Exercicio 4 <---------------------------
// ----------------------> Exercicio 5 <---------------------------*/


const idade = prompt("Qual é a sua idade?")
console.log(idade)

const idadeMelhorAmigx = prompt("Qual é a idade do seu melhor amigo(a)?")
console.log(idadeMelhorAmigx)

console.log("Sua idade é maior do que a do seu melhor amix?")
let maiorOuMenor = true

let resultado = Number(idade) - Number(idadeMelhorAmigx)

console.log(maiorOuMenor)
console.log(resultado)

const par = prompt("Insira um número par")
console.log("dividindo esse número por dois, a sobra será:", (par % 2))
/* C.
sempre que for inseridos números pares, o resto da divisão será 0 
D. 
da mesma forma que se números ímpares forem inseridos e divididos por 2 como solicitado
no exercício, o resultado do resto da divisão será sempre 1*/

let idadeAnos = prompt("Quantos anos você tem?")
console.log(idadeAnos)

let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 365
let idadeHoras = idadeMeses * 24

console.log("A idade do usuário em meses:", (idadeMeses), "A idade do usuário em dias:", (idadeDias), "A idade do usuário em horas:", (idadeHoras))





