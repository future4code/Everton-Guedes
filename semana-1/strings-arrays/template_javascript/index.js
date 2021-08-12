//Exercícios de interpretação de código
/*1.
a - undefined
b - null
c - 11
d - 3
e - 
f - 9
*/

/*2.
SUBI NUM ÔNIBUS EM MIRROCOS*/

const nomeUsuario = prompt("Qual é o seu nome?")
const emailUsuario = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

const comidasPreferidas = ["Churrasco", "Lasanha", "Kibe cru", "Tabule", "Hambúrguer"]

console.log("Essas são minhas comidas preferidas: ", comidasPreferidas)
console.log(comidasPreferidas[i=0])
console.log(comidasPreferidas[i=1])
console.log(comidasPreferidas[i=2])
console.log(comidasPreferidas[i=3])
console.log(comidasPreferidas[i=4])
const comidaPreferidaUsuario = prompt("Qual é a sua comida preferida?")

comidasPreferidas [1] = comidaPreferidaUsuario

console.log(comidasPreferidas)

const listaDeTarefas = []

const tarefa1 = prompt("Diga uma tarefa que você precisa fazer hoje")
const tarefa2 = prompt("Diga outra tarefa que você precisa fazer hoje")
const tarefa3 = prompt("Diga mais uma tarefa que você precisa fazer hoje")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3) 

console.log(listaDeTarefas)

const indiceDeTarefa = prompt ("Digite o índice de uma tarefa já realizada")

console.log(indiceDeTarefa)

listaDeTarefas.splice(indiceDeTarefa,1)

console.log(listaDeTarefas)


