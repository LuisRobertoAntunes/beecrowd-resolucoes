//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var numbFuncionario = parseInt(lines.shift())
var horaTrabalhada = parseInt(lines.shift())
var valorHora = parseFloat(lines.shift())

var salario = horaTrabalhada * valorHora

console.log(`NUMBER = ${numbFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`)