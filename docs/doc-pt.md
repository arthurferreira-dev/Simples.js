# Documento do ``Simples.js``

## Classe ``simplesMath``

### Acesso as Classes da Lib:

### Acesso a Classe ``simples``

```javascript
const {simplesMath, simplesUtils} = require("./dist/simples");
let math = new simplesMath(); // se quiser pode trocar o nome da variável
```

### Soma:

```javascript
let x = math.sum(1, 2) // output: 3
```

### Subtração:

```javascript
let y = math.sub(1, 1) // output: 0
```

### Multiplicação:

```javascript
let vezes = math.mult(3, 3) // output: 9
```

### Divisão
```javascript
let div = math.div(3, 0) // output: Infinity
```

### Raíz Quadrada
```javascript
let raiz = math.sqrt(25) // output: 5
```

### Logaritmo
```javascript
let log = math.log(30) // output: 3.4011973816621555
```

### Logaritmo em base 10
```javascript
let log10 = math.log10(30) // output: 1.4771212547196624
```

### Arredondamento
```javascript
let log = math.log(30)
let round = math.round(log) // output: 3
```

### Exponenciação
```javascript
let pow = math.power(5, 10) // output: 9765625
```

### Randonização
```javascript
let rand = math.random(0, 100) // output: número aleatório (inteiro ou flutuante)
```

### Randonização Inteira
```javascript
let randInt = math.randomInt(0, 100) // output: número aleatório (inteiro)
```

### Resto da Divisão
```javascript
let resto = math.mod(5, 2) // output: 1
```

### Fatorial
```javascript
let fat = math.factorial(5) // output: 120
```

### Valor Absoluto ou Módulo
```javascript
let abs = math.abs(-5) // output: 5
let abs = math.abs(5) // output: 5
let abs = math.abs(+5) // output: 5
```

## Classe ``simplesUtils``

### Acesso as Classes da Lib:

```javascript
const {simplesMath, simplesUtils} = require("./dist/simples");
let math = new simplesMath(); // se quiser pode trocar o nome da variável
```