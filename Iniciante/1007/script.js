//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var A = parseInt(lines.shift()) 
var B = parseInt(lines.shift()) 
var C = parseInt(lines.shift()) 
var D = parseInt(lines.shift()) 

var diferenca = (A * B) - (C * D)
console.log(`DIFERENCA = ${diferenca}`)