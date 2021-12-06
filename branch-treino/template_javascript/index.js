/*const nome = prompt("QUal é o seu nome?")
const email = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

const comidasPreferidas = ["Churrasco", "Tabule", "Lasanha", "Hambúrguer", "Espetinho"]
console.log(comidasPreferidas)

console.log("Essas são minhas comidas preferidas")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaPreferida = prompt("Qual é a preferida?")
comidasPreferidas[1] = comidaPreferida
console.log(comidasPreferidas)*/

const listaDeTarefas = []
const primeiraTarefa = prompt("Digite uma tarefa")
const segundaTarefa = prompt("Digita uma tarefa")
const terceiraTarefa = prompt("DIgite uma tarefa")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)
console.log(listaDeTarefas)

const tarefaRealizada = prompt("Digite o índice de uma tarefa que já foi realizada: 0, 1 ou 2")

listaDeTarefas.splice(Number(tarefaRealizada), 1)
console.log(listaDeTarefas)