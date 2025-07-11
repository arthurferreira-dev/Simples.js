const {simplesMath, simplesUtils} = require('./dist/simples.js');

let math = new simplesMath();

let x = math.sum(1, 2)
let y = math.sub(1, 1)
let vezes = math.mult(3, 3)
let div = math.div(3, 0)
let raiz = math.sqrt(25)
let log = math.log(30)
let round = math.round(log)
let log10 = math.log10(30)
let pow = math.power(5, 10)
let rand = math.random(0, 100)
let randInt = math.randomInt(0, 100)
let resto = math.mod(5, 2)
let fat = math.factorial(5)
let abs = math.abs(+5)

console.log(abs)