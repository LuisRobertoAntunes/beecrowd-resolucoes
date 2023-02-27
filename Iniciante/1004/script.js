//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var numb01 = parseInt(lines.shift())
var numb02 = parseInt(lines.shift())

var prod = numb01 * numb02
console.log(`PROD = ${prod}`)