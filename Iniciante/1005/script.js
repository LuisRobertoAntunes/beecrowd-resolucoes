//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var nota01 = parseFloat(lines.shift()) * 3.5
var nota02 = parseFloat(lines.shift()) * 7.5

var media = (nota01 + nota02) / 11
console.log(`MEDIA = ${media.toFixed(5)}`)