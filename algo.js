import { simplesMath } from "./dist/simples.js";
let math = new simplesMath();

let para = document.getElementById('a')

let x = math.sub(9, 1);

para.innerHTML = `${x}`