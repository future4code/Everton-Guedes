```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let count = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      count += 1;
    }
  }
  return (`O número ${numeroEscolhido} aparece ${count} x`)
}```