// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
} 

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(areaDoRetangulo) {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite uma altura"))
  const largura = Number(prompt("Digite uma largura"))
  areaDoRetangulo = altura * largura
  console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(idade) {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoDeNascimento = Number(prompt("Qual é o seu ano de nascimento?"))
  idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual é a sua idade?")
  const email = prompt("Qual é o seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(coresFavoritas) {
  // implemente sua lógica aqui
  coresFavoritas = []
  const cor1 = prompt("Insira sua cor favorita")
  const cor2 = prompt("Insira sua cor favorita")
  const cor3 = prompt("Insira sua cor favorita")
  
  coresFavoritas.push(cor1)
  coresFavoritas.push(cor2)
  coresFavoritas.push(cor3)
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiuscula = string.toUpperCase()
  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosNecessarios = custo / valorIngresso
  return ingressosNecessarios
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho = string1.length === string2.length
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array
  const primeiroElemento = array[0]
  return primeiroElemento   
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array
  const ultimoElemento = array[array.length-1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}