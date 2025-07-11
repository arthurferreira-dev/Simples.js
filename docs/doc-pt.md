# Documento do ``Simple.js``

## Classe ``simplesMath``

### Acesso a Lib:

```javascript
const simplesMath = require("./dist/simples");
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