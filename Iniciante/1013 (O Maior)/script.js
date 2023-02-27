//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split(" ")

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var C = parseInt(lines.shift())

//MATH.ABS -> Retorna o valor absoluta da subtração de A - B
var maiorAB = (A + B + Math.abs(A -B)) / 2

var maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2

console.log(`${maiorABC} eh o maior`)
