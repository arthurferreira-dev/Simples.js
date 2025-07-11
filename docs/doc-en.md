# ``Simples.js`` Document

## Classes

* [``simplesMath``](#class-simplesmath)
* [``simplesUtils``](#class-simplesutils)
* [``simplesElement``](#class-simpleselement)

## Class ``simplesMath``

### Accessing the Library Classes:

### Accessing the ``simplesMath`` Class
```javascript
import { simplesMath } from "./dist/simples.js";
let math = new simplesMath(); // you can rename the variable if you want
```

### Sum:

```javascript
let x = math.sum(1, 2); // output: 3
```

### Subtraction:

```javascript
let y = math.sub(1, 1); // output: 0
```

### Multiplication:

```javascript
let vezes = math.mult(3, 3); // output: 9
```

### Division
```javascript
let div = math.div(3, 0); // output: Infinity
```

### Square Root
```javascript
let raiz = math.sqrt(25); // output: 5
```

### Number Squared
```javascript
let quadrado = math.squared(5); // output: 25
```

### Logarithm
```javascript
let log = math.log(30); // output: 3.4011973816621555
```

### Logarithm base 10
```javascript
let log10 = math.log10(30); // output: 1.4771212547196624
```

### Rounding
```javascript
let log = math.log(30);
let round = math.round(log); // output: 3
```

### Exponentiation
```javascript
let pow = math.power(5, 10); // output: 9765625
```

### Randomization
```javascript
let rand = math.random(0, 100); // output: random number (integer or float)
```

### Random Integer
```javascript
let randInt = math.randomInt(0, 100); // output: random number (integer)
```

### Modulus (Remainder of Division)
```javascript
let resto = math.mod(5, 2); // output: 1
```

### Factorial
```javascript
let fat = math.factorial(5); // output: 120
```

### Absolute Value
```javascript
let abs = math.abs(-5); // output: 5
let abs = math.abs(5); // output: 5
let abs = math.abs(+5); // output: 5
```

## Class ``simplesUtils``

### Accessing the Library Classes:
```javascript
import { simplesUtils } from "./dist/simples.js";
let utils = new simplesUtils(); // you can rename the variable if you want
```

## Primitive Type Checkers

### isNumber
```javascript
let number = utils.isNumber(5); // output: true
let Notnumber = utils.isNumber('a'); // output: false
```

### isString
```javascript
let string = utils.isString('Simples.js'); // output: true
let Notstring = utils.isString(5); // output: false
```

### isArray
```javascript
let array = utils.isArray(['John', { nome: 'Jenny' }]); // output: true
let Notarray = utils.isArray('abc'); // output: false
```

### isObject
```javascript
let object = utils.isObject({lib: 'Simples.js'}); // output: true
let Notobject = utils.isObject(5); // output: false
```

## Date Formatter

### formatDate
```javascript
let date = utils.formatDate('2025-07-11') // year-month-day = output: 07/11/2025
```

## Reverse String

### reverseString
```javascript
let reverse = utils.reverseString('esreveR') // output: Reverse
```

## Class ``simplesElement``

### Accessing the simplesElement Class
```javascript
import { simplesElement } from "./dist/simples.js";
let element = new simplesElement(); // you can rename the variable if you want
```

### HTML & CSS

### Creating HTML Elements
```javascript
element.creatorElement('p') // pass the element tag as a string
```

### Parent Element
```javascript
let elem = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elem);
```

### Text Content
```javascript
let elem = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elem);
element.textElement(elem, 'GG')
```