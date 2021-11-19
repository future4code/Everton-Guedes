///////////////////// DADOS /////////////////////

// const pokemons = [
//    { nome: "Bulbasaur", tipo: "grama" },
//    { nome: "Bellsprout", tipo: "grama" },
//    { nome: "Charmander", tipo: "fogo" },
//    { nome: "Vulpix", tipo: "fogo" },
//    { nome: "Squirtle", tipo: "água" },
//    { nome: "Psyduck", tipo: "água" },
// ]

// const numerosAleatorios = [1, 2, 5, 8, 10, 11, 13, 15, 20]

// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preço: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preço: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preço: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preço: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preço: 8.99 },
//    { nome: "Sabão em Pó", categoria: "Limpeza", preço: 10.80 }
// ]


// ///////////////////// FUNÇÕES /////////////////////

// function verificarPar(numero) {

//    if (numero % 2 === 0) {
//       const resultado = numero / 2
//    }
// }

// function imprimirMensagem(valor) {
//    console.log("O resultado da sua conta é:", valor)
// }

// function validarPokemonDeGrama(pokemon) {
//    return pokemon.tipo === "grama"
// }

// function extrairNome(obj) {
//    return obj.nome
// }


// ///////////////////// TESTES /////////////////////

// console.log("Hello, world!");

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// 1. Novos arrays, baseado no array original, dissecando parâmetro por parâmetro de cada objeto.

// 2. Um novo array, baseado no original com os objetos "nome" ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3. Um novo array, baseado no original, mas retirando as informações do obejto "Chijo", matendo somente as 
//    posições [0, 1]

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

function extrairNome(cachorrinhos) {
   return cachorrinhos.nome
}

function imprimirSalsichas(salsichas) {
   return salsichas.raca === "Salsicha"
}

const nomesDosCachorrinhos = pets.map(extrairNome)
console.log(nomesDosCachorrinhos)

const validarNomesSalsichas = (item, i, array) => {return nome.raca === "Salsicha"}

const nomesDosSalsichas = pets.filter(validarNomesSalsichas)

const apenasOsSalsichas = nomesDosSalsichas.map(extrairNome)

console.log(apenasOsSalsichas)