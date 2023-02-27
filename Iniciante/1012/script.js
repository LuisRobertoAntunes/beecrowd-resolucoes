//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split(" ")

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())

//CALCULO AREA TRANGULO
var areaTriangulo = (A * C) / 2

//CALCULO AREA CIRCULO
var areaCirculo = 3.14159 * (C * C)

//CALCULO AREA TRAPEZIO
var areaTrapezio = ((A + B) * C) / 2

//CALCULO AREA QUADRADO
var areaQuadrado = B * B

//CALCULO AREA RETANGULO
var areaRetangulo = A * B

console.log(
  `TRIANGULO: ${areaTriangulo.toFixed(3)}\nCIRCULO: ${areaCirculo.toFixed(
    3
  )}\nTRAPEZIO: ${areaTrapezio.toFixed(3)}\nQUADRADO: ${areaQuadrado.toFixed(
    3
  )}\nRETANGULO: ${areaRetangulo.toFixed(3)}`
)
