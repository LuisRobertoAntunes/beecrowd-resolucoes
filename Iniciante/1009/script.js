//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES

var salarioFixo = parseFloat(lines[1])
var vendaEfetuada = parseFloat(lines[2])
var comissao = (15 * vendaEfetuada) / 100
var salarioTotal = salarioFixo + comissao 

console.log(`TOTAL = ${salarioTotal.toFixed(2)}`)