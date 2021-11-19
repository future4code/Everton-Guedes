/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   cartaUsuario = comprarCarta(2)
   cartaComputador = comprarCarta(2)
} else {
   console.log("O jogo acabou")
}

const carta = comprarCarta(cartaUsuario)

console.log(`Usuário - cartas: ${carta.texto} ${carta.texto} - ${carta.valor}`)
console.log(`Computador - cartas: ${carta.texto} ${carta.texto} - ${carta.valor}`)
