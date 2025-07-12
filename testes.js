import { simplesMath, simplesUtils, simplesBrasil, simplesUSA, simplesEspana } from "./dist/simples.js";

let math = new simplesMath();
let utils = new simplesUtils();
let brasil = new simplesBrasil();
let usa = new simplesUSA();
let espana = new simplesEspana();

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
let randInt = math.randomInt(0, 26)
let resto = math.mod(5, 2)
let fat = math.factorial(5)
let abs = math.abs(+5)
let n = utils.isNumber(5);
let str = utils.isString('Simples.js');
let array = utils.isArray('a');
let object = utils.isObject({lib: 'Simples.js'})
let data = utils.formatadorDate('2025-07-11')
let date = utils.formatDate('2025-07-11')
let reverse = utils.reverseString('esreveR')
let squared = math.squared(5);
let num = utils.isEmail('exemplo@gmail.com');
let dindin = brasil.real(1500)
let mm = usa.dollar(1500)
let dinero = espana.euro(1500)
let nx = utils.isTelephone('+55 13 99797-8941')
//let gg = brasil.doc(1);
//let con = utils.Console(1 + 1);
let us = usa.dollar(1500);
let da = brasil.independencia('a');
let es = espana.real(3000);

const Alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const randIn = Math.floor(Math.random() * Alfa.length);

let senha = Alfa[randIn];

console.log(es)