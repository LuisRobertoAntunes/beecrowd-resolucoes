//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//Separei os dados das duas comprar por linhas
var line01 = lines.shift()
var line02 = lines.shift()

//Separei dados por item utilizando o split
var ponto01 = line01.split(" ")
var ponto02 = line02.split(" ")

var x1 = parseFloat(ponto01.shift())
var y1 = parseFloat(ponto01.shift())
var x2 = parseFloat(ponto02.shift())
var y2 = parseFloat(ponto02.shift())

var distancia =Math.sqrt( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))


console.log(`${distancia.toFixed(4)}`)
