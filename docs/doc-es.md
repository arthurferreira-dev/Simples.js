# Documento de ``Simples.js``

## Clases
* [``simplesMath``](#clase-simplesmath)
* [``simplesUtils``](#clase-simplesutils)
* [``simplesElement``](#clase-simpleselement)

## Clase ``simplesMath``

### Acceso a las Clases de la Librería

### Acceso a la Clase ``simplesMath``

```javascript
import { simplesMath } from "./dist/simples.js";
let math = new simplesMath(); // puedes cambiar el nombre de la variable si lo deseas
```

## Suma:
```javascript
let x = math.sum(1, 2); // salida: 3
```

## Resta:
```javascript
let y = math.sub(1, 1); // salida: 0
```

## Multiplicación:
```javascript
let veces = math.mult(3, 3); // salida: 9
```

## División:
```javascript
let div = math.div(3, 0); // salida: Infinity
```

## Raíz Cuadrada:
```javascript
let raiz = math.sqrt(25); // salida: 5
```

## Número al Cuadrado:
```javascript
let cuadrado = math.squared(5); // salida: 25
```

## Logaritmo:
```javascript
let log = math.log(30); // salida: 3.4011973816621555
```

## Logaritmo en base 10:
```javascript
let log10 = math.log10(30); // salida: 1.4771212547196624
```

## Redondeo:
```javascript
let log = math.log(30);
let round = math.round(log); // salida: 3
```

## Exponenciación:
```javascript
let pow = math.power(5, 10); // salida: 9765625
```

## Aleatoriedad:
```javascript
let rand = math.random(0, 100); // salida: número aleatorio (entero o decimal)
```

## Aleatoriedad Entera:
```javascript
let randInt = math.randomInt(0, 100); // salida: número aleatorio (entero)
```

## Módulo (Resto de la División):
```javascript
let resto = math.mod(5, 2); // salida: 1
```

## Factorial:
```javascript
let fat = math.factorial(5); // salida: 120
```

## Valor Absoluto:
```javascript
let abs = math.abs(-5); // salida: 5
let abs = math.abs(5); // salida: 5
let abs = math.abs(+5); // salida: 5
```

## Clase ``simplesUtils``

### Acceso a las Clases de la Librería:
```javascript
import { simplesUtils } from "./dist/simples.js";
let utils = new simplesUtils(); // puedes cambiar el nombre de la variable si lo deseas
```
## Verificadores de tipos primitivos

### isNumber
```javascript
let number = utils.isNumber(5); // salida: true
let Notnumber = utils.isNumber('a'); // salida: false
```

### isString
```javascript
let string = utils.isString('Simples.js'); // salida: true
let Notstring = utils.isString(5); // salida: false
```

### isArray
```javascript
let array = utils.isArray(['Juan', { nombre: 'María' }]); // salida: true
let Notarray = utils.isArray('abc'); // salida: false
```

### isObject
```javascript
let object = utils.isObject({lib: 'Simples.js'}); // salida: true
let Notobject = utils.isObject(5); // salida: false
```

## Formateador de Fechas

### formatadorDate
```javascript
let data = utils.formatadorDate('2025-07-11') // año-mes-día = salida: 11/07/2025
```

### formatDate
```javascript
let date = utils.formatDate('2025-07-11') // año-mes-día = salida: 07/11/2025
```

## Inversión de Cadenas

### reverseString
```javascript
let reverse = utils.reverseString('esreveR') // salida: Reverse
```

## Clase simplesElement

### Acceso a la Clase simplesElement
```javascript
import { simplesElement } from "./dist/simples.js";
let element = new simplesElement(); // puedes cambiar el nombre de la variable si lo deseas
```

## HTML & CSS

### Crear Elementos HTML
```javascript
element.creatorElement('p') // introduce la etiqueta del elemento como cadena
```

### Elemento Padre
```javascript
let elemento = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elemento);
```

### Contenido de Texto
```javascript
let elemento = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elemento);
element.textElement(elemento, 'GG')
```