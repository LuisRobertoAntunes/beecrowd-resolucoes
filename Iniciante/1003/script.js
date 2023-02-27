//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var A = parseInt(lines.shift())
var B = parseInt(lines.shift())

var soma = A + B
console.log(`SOMA = ${soma}`)