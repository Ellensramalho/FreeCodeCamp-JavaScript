function truncateString(texto, valor){
  if (texto.length > valor){
    return texto.slice(0, valor) + "..."
  }
  return texto
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("Absolutely Longer", 2))