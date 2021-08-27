// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   // return array.reverse()

   const resultado = []

   for (let i = array.length - 1; i >= 0; i--) {
      resultado.push(array[i])
   }

   return resultado
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   // return array.sort((previous, current) => previous - current)

   const resultado = []

   const inserirEmOrdem = (arr, item) => {

      for (let i in arr) {
         if (item < arr[i]) {
            arr.splice(i, 0, item)
            return
         }
      }

      arr.push(item)
   }

   for (let item of array) inserirEmOrdem(resultado, item)

   return resultado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   // return array.filter(n => n % 2 === 0)

   const resultado = []

   for (const item of array) {
      if (item % 2 === 0) resultado.push(item)
   }

   return resultado
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   return retornaNumerosPares(array).map(n => n ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

   const arrayEmOrdemDecrescente = retornaArrayInvertido(retornaArrayOrdenado(array))

   return arrayEmOrdemDecrescente[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

   const [menor, maior] = retornaArrayOrdenado([num1, num2])

   return {
      maiorNumero: maior,
      maiorDivisivelPorMenor: maior % menor === 0,
      diferenca: maior - menor
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

   const resultado = []

   for (let i = 0; i < n; i++) {
      resultado[i] = 2 * i
   }

   return resultado
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   if (ladoA === ladoB && ladoB === ladoC) return "Equilátero"

   if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return "Isósceles"

   return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

   const arrayOrdenado = retornaArrayOrdenado(array)
   const indiceSegundoMenor = 1
   const indiceSegundoMaior = array.length - 2

   return [
      arrayOrdenado[indiceSegundoMaior],
      arrayOrdenado[indiceSegundoMenor]
   ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13
const validarPessoa = pessoa => (
   pessoa.altura > 1.5 &&
   pessoa.idade > 14 &&
   pessoa.idade < 60
)

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(validarPessoa)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

   const somar = (num1, num2) => num1 + num2

   contas.forEach(conta => {

      const somaDosGastos = conta.compras.reduce(somar, 0)

      conta.saldoTotal -= somaDosGastos

      conta.compras = []
   })

   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

   const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1

   return consultas.sort(compararNomesDeConsulta)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

   const gerarData = string => {

      const [dia, mes, ano] = string.split("/")

      return new Date(`${ano}-${mes}-${dia}`)
   }

   const compararDatasDeConsulta = (a, b) => {
      if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
         return 1
      } else {
         return -1
      }
   }

   return consultas.sort(compararDatasDeConsulta)
}