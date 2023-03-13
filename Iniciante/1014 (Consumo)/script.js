//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split('\n');

var distanciaTotal = parseFloat(lines.shift())
var combustivelGasto = parseFloat(lines.shift())

var consumoMedio = distanciaTotal / combustivelGasto


console.log(`${consumoMedio.toFixed(3)} km/l`)
