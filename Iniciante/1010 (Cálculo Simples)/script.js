//FileSync sempre retorna em forma de STRING
var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

//Separei os dados das duas comprar por linhas
var line01 = lines.shift()
var line02 = lines.shift()

//Separei dados por item utilizando o split
var Compra01 = line01.split(" ")
var Compra02 = line02.split(" ")

// Dados compra da peça 01
var QuantdPeca01 = parseInt(Compra01[1])
var valorPeca01 = parseFloat(Compra01[2])

// Dados compra da peça 02
var QuantdPeca02 = parseInt(Compra02[1])
var valorPeca02 = parseFloat(Compra02[2])

var total = (QuantdPeca01 * valorPeca01) + (QuantdPeca02 * valorPeca02)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)