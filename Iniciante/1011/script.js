//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

var raio = parseInt(lines)
var pi = 3.14159

// Math.pow(x,y) = Retorna a base x   elevada à potência y do expoente.
var volume = (4/3.0) * pi * Math.pow(raio,3)

console.log(`VOLUME = ${volume.toFixed(3)}`)


