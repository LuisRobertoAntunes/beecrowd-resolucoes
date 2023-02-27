//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//SHIFT retira o valor indice [0] do array LINES
var raio = parseFloat(lines.shift())
var n = 3.14159

/* Math.pow(x,y) = Retorna a base x   elevada à potência y do expoente.
  
  Não Usei a funçãp Math.PI pois nele o valor de PI = 3.141592653589793
*/
var area = n * Math.pow(raio, 2)
console.log(`A = ${area.toFixed(4)}`)

