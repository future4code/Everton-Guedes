// Exercícios interpretação de código
// 1.
// console.log(filme.elenco[0]) - Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.lenght - 1]) - Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) - canal: GLobo, horario: 14h

// 2.
// a) nome: Juca, idade: 3, raca: SRD
//    nome: Juba, idade: 3, raca: SRD
//    nome: Jubo, idade: 3, raca: SRD

// b) faz uma cópia inteira de um objeto para outro e também é capaz de mudar
//    ou adicionar parcialmente as propriedades que forem convenientes.

// 3.
// a) eu não soube responder o que seria impresso
// b) executando o código foi impresso no console o booleano: false 
//    confirmando o que foi escrito no código e undefined por não haver
//    uma atribuição para altura.

// Exercícios de escrita do código 
// 1. 
// a)
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function imprimiDadosPessoais(dadosPessoa) {
    console.log(`Eu sou ${dadosPessoa.nome}, mas pode me chamar de: 
${dadosPessoa.apelidos[0]}, ${dadosPessoa.apelidos[1]}, ${dadosPessoa.apelidos[2]}`)
}

imprimiDadosPessoais(pessoa)

// b)
const novosApelidos = {
    ...pessoa,
    apelidos: ["Amandax", "Amandex", "Amandix"]
}

imprimiDadosPessoais(novosApelidos)

// 2.
// a)
const individuo1 = {
    nome: "Bruno",
    idade: 23,
    profissao: "instrutor"
}

const individuo2 = {
    nome: "Laurentino",
    idade: 58,
    profissao: "historiador"
}

function retornoInformacoes(parametro1) {
    retornoArrays = [parametro1.nome, parametro1.nome.length, parametro1.idade, parametro1.profissao, parametro1.profissao.length]
    console.log(retornoArrays)
}

retornoInformacoes(individuo1)
retornoInformacoes(individuo2)
