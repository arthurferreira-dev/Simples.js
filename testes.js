const simplesMath = require('./dist/simples');

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

console.log(pow);