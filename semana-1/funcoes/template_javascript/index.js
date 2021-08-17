// Exercícios interpretação de código

// 1.
// a) 10 50 
// b) o programa não executaria nenhum comando. Provavelmente algum erro.

// 2.
// a)
// b)

// Exercícios de escrita de código

// 1.
// a)

function informarDados (){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

let nome = "Everton"
let idade = 30
let cidade = "Cacoal"
let profissao = "Estudante"
informarDados(nome, idade, cidade, profissao)

// b)

nome = prompt("Informe o seu nome")
idade = prompt("Informe a sua idade")
cidade = prompt("Informa a sua cidade")
profissao = prompt("Informe a sua profissão")
informarDados(nome, idade, cidade, profissao)

