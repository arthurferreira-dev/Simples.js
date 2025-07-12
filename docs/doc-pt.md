# Documento do ``Simples.js``

## Classes
* [``simplesMath``](#classe-simplesmath)
* [``simplesUtils``](#classe-simplesutils)
* [``simplesElement``](#classe-simpleselement)
* [``simplesBrasil``](#classe-simplesbrasil)
* [``simplesUSA``](#classe-simplesusa)
* [``simplesEspana``](#classe-simplesespana)

## Classe ``simplesMath``

### Acesso as Classes da Lib:

### Acesso a Classe ``simplesMath``

```javascript
import { simplesMath } from "./dist/simples.js";
let math = new simplesMath(); // se quiser pode trocar o nome da variável
```

### Soma:

```javascript
let x = math.sum(1, 2); // output: 3
```

### Subtração:

```javascript
let y = math.sub(1, 1); // output: 0
```

### Multiplicação:

```javascript
let vezes = math.mult(3, 3); // output: 9
```

### Divisão
```javascript
let div = math.div(3, 0); // output: Infinity
```

### Raíz Quadrada
```javascript
let raiz = math.sqrt(25); // output: 5
```

### Número ao Quadrado
```javascript
let quadrado = math.squared(5); // output: 25
```

### Logaritmo
```javascript
let log = math.log(30); // output: 3.4011973816621555
```

### Logaritmo em base 10
```javascript
let log10 = math.log10(30); // output: 1.4771212547196624
```

### Arredondamento
```javascript
let log = math.log(30);
let round = math.round(log); // output: 3
```

### Exponenciação
```javascript
let pow = math.power(5, 10); // output: 9765625
```

### Randomização
```javascript
let rand = math.random(0, 100); // output: número aleatório (inteiro ou flutuante)
```

### Randomização Inteira
```javascript
let randInt = math.randomInt(0, 100); // output: número aleatório (inteiro)
```

### Resto da Divisão
```javascript
let resto = math.mod(5, 2); // output: 1
```

### Fatorial
```javascript
let fat = math.factorial(5); // output: 120
```

### Valor Absoluto ou Módulo
```javascript
let abs = math.abs(-5); // output: 5
let abs = math.abs(5); // output: 5
let abs = math.abs(+5); // output: 5
```

## Classe ``simplesUtils``

### Acesso as Classes da Lib:

```javascript
import { simplesUtils } from "./dist/simples.js";
let utils = new simplesUtils(); // se quiser pode trocar o nome da variável
```

## Verificadores de classes primitivas

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
let array = utils.isArray(['João', { nome: 'Maria' }]); // output: true
let Notarray = utils.isArray('abc'); // output: false
```

### isObject
```javascript
let object = utils.isObject({lib: 'Simples.js'}); // output: true
let Notobject = utils.isObject(5); // output: false
```

## Formatador de Datas

### formatadorDate
```javascript
let data = utils.formatadorDate('2025-07-11') // ano-mes-dia = output: 11/07/2025
```

### formatDate
```javascript
let date = utils.formatDate('2025-07-11') // ano-mes-dia = output: 07/11/2025
```

## String Reversa

### reverseString
```javascript
let reverse = utils.reverseString('esreveR') // output: Reverse
```

## Verificadores usados da Lib [validator.js](https://github.com/validatorjs/validator.js)

### Verificador de Email
```javascript
let email = utils.isEmail('exemplo@gmail.com'); // output: true
```

### Verificador de Número de Telefone
```javascript
let TelephoneNumber = utils.isTelephone('+55 13 99797-8941') // output: true
let AnotherTelephoneNumber = utils.isTelephone(+55 13 99797-8941) // output: error | use entre STRING!
```

## Console Customizado

### Console
```javascript
let console = utils.Console(1 + 1); // output: 2 = console.log(1 + 1) = 2
```

## Classe ``simplesElement``

### Acesso a Classe ``simplesElement``

```javascript
import { simplesElement } from "./dist/simples.js";
let element = new simplesElement(); // se quiser pode trocar o nome da variável
```

### HTML & CSS

### Criar Elementos HTML
```javascript
element.creatorElement('p') // coloque a tag do elemento como string
```

### Elemento Pai
```javascript
let elemento = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elemento);
```

### Text Content
```javascript
let elemento = element.creatorElement('p');
let main = document.querySelector('main');
element.childElement(main, elemento);
element.textElement(elemento, 'GG')
```

## Classes de Países

## Classe ``simplesBrasil``

### Acesso a Classe ``simplesBrasil``

```javascript
import { simplesBrasil } from "./dist/simples.js";
let brasil = new simplesBrasil(); // se quiser pode trocar o nome da variável
```

### Café

```javascript
let tempo = brasil.cafe(10); // output: Pausa pra tomar um Café ☕. Já se passou 10 segundos
```

## Moedas Internacionais

### Real (R$)
```javascript
let real = brasil.real(1500) // output: R$ 1.500,00
```

### Dólar (US$)
```javascript
let usd = brasil.dolar(1500); // output: US$1.500,00
```

### Euro (€)
```javascript
let euro = brasil.euro(3000); // output: € 3.000,00
```

### [EASTEREGG] Abre o Olho [EASTEREGG]
```javascript
let gg = brasil.AbreOolho(); // output: Simples.js: Abre o Olho, Animal!
```

### Documentação
```javascript
let doc = brasil.doc('x'); // output: Simples.js: https://github.com/arthurferreira-dev/Simples.js
let doc2 = brasil.doc(1); // output: Error: digite como uma STRING!
```

### [EASTEREGG] Sinal [EASTEREGG]
```javascript
let sinal = brasil.sinal(); // output: Simples JS: Tá ai seu Sinal! | Se for no navegador mas se for no console vai dar erro
```

### Data da Independência do Brasil
```javascript
let inde = brasil.independencia('a'); // output: 07 de Setembro de 1822
let inde2 = brasil.independencia(1); // output: Error: digite como uma STRING!
```

## Classe ``simplesUSA``

### Acesso a Classe ``simplesUSA``

```javascript
import { simplesUSA } from "./dist/simples.js";
let eua = new simplesUSA(); // se quiser pode trocar o nome da variável
```

### Dólar (US$ geralmente os EUA usa apenas $)
```javascript
let dollar = eua.dollar(1500); // output: $1,500.00
```

### Euro (€)
```javascript
let euro = usa.euro(3000); // output: €3,000.00
```

### Real (R$)
```javascript
let real = usa.real(3000); // output: R$3,000.00
```

### Pause (Igual ao [Café](#café))
```javascript
let timer = eua.pause(10); // output: Pause Now!
```

### Doc (mesma coisa em [Documentação](#documentação))
```javascript
let doc = eua.doc('x'); // output: Simples.js: https://github.com/arthurferreira-dev/Simples.js
let doc2 = eua.doc(1); // output: Error: please write like a STRING!
```

## Classe ``simplesEspana``

### Acesso a Classe ``simplesEspana``

```javascript
import { simplesEspana } from "./dist/simples.js";
let espana = new simplesEspana(); // se quiser pode trocar o nome da variável
```

### Euro (€)
```javascript
let dinero = espana.euro(1500); // output: 1500,00 €
```

### Dólar ($)
```javascript
let dolar = espana.dolar(3000); // output: 3000,00 US$
```

### Real (BRL)
```javascript
let real = espana.real(3000); // output: 3000,00 BRL
```

### Doc (mesma coisa que [Doc](#doc-mesma-coisa-em-documentação))
```javascript
let doc = eua.doc('x'); // output: Simples.js: https://github.com/arthurferreira-dev/Simples.js
let doc2 = eua.doc(1); // output: Error: Porfavor escribe cómo una STRING!
```