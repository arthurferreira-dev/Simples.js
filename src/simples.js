// Simples.js
import validator from "validator";
const { isEmail, isMobilePhone } = validator;

export class simplesMath {
    sum(a, b) {
        return a + b;
    }

    sub(x, y) {
        return x - y;
    }

    mult(c, d) {
        return c * d;
    }

    div(a, z) {
        if (z === 0) {
            return Infinity;
        } else {
            return a / z;
        }
    }

    sqrt(number) {
        return Math.sqrt(number);
    }

    squared(number) {
        return number * number;
    }

    log(number) {
        return Math.log(number);
    }

    log10(number) {
        return Math.log10(number);
    }

    round(number) {
        return Math.round(number);
    }

    power(base, expo) {
        return base ** expo;
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    pow10(number) {
        return Math.pow(10, number)
    }

    mod(n1, n2) {
        return n1 % n2;
    }

    factorial(number) {
        if (number < 0) return "Sorry, but the number is not positive. Desculpe mais o número não é positivo. Lo sentimos, pero el número no es positivo.";
         let r = 1;
        for (let i = 1; i <= number; i++) {
            r *= i;
        }
        return r;
    }

    abs(number) {
        return Math.abs(number);
    }

    pi(value) {
        return Math.PI;
    }
}

export class simplesUtils {
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    isString(value) {
        return typeof value === 'string';
    }

    isArray(value) {
        return Array.isArray(value);
    }

    isObject(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    formatadorDate(date) { // Português y Español
        const d = new Date(date);
        let dia = String(d.getDate() + 1).padStart(2, '0');
        let mes = String(d.getMonth() + 1).padStart(2, '0');
        let ano = d.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    formatDate(date) { // English
        const d = new Date(date);
        let day = String(d.getDate() + 1).padStart(2, '0');
        let month = String(d.getMonth() + 1).padStart(2, '0');
        let year = d.getFullYear();
        return `${month}/${day}/${year}`;
    }

    reverseString(string) {
        return string.split('').reverse().join('');
    }

    isEmail(email) {
        return validator.isEmail(email);
    }

    isTelephone(number, country) {
        return validator.isMobilePhone(number, country);
    }

    Console(value) {
        return console.log(value)
    }
}

export class simplesElement {
    creatorElement(element) {
        let item = document.createElement(element);
        document.body.appendChild(item);
        return item;
    }

    childElement(dad, element) {
        dad.appendChild(element)
    }

    textElement(element, text) {
        element.textContent = text
    }
}

export class simplesBrasil {
    cafe(timer) { // pause
        let time = timer * 1000
        return setTimeout(() => {
            console.log('Pausa pra tomar um Café ☕.', `Já se passou ${time / 1000} segundos`)
        }, time)
    }

    real(dinheiro) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dinheiro)
    }

    AbreOolho() {
        let simples = 'Simples.js:'
        return console.log(simples, 'Abre o Olho, Animal!')
    }

    doc(doc) {
        if (typeof doc === 'string') {
            let simples = 'Simples.js:'
            return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js')
        } else {
            return console.log('Error: digite como uma STRING!')
        }
    }

    sinal() {
        return alert('Simples JS: Tá ai seu Sinal!')
    }

    dolar(dindin) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol" }).format(dindin).replace('$', 'US$')
    }

    independencia(string) {
        if (typeof string === 'string') {
            return '07 de Setembro de 1822'
        } else {
            return 'Error: digite como uma STRING!'
        }
    }
}

export class simplesUSA {
    dollar(money) {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol" }).format(money)
    }

    pause(timer) {
        let time = timer * 1000
        return setTimeout(() => {
            console.log('Pause Now!')
        }, time)
    }

    doc(doc) {
        if (typeof doc === 'string') {
            let simples = 'Simples.js:'
            return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js')
        } else {
            return console.log('Error: please write like a STRING!')
        }
    }
}

export class simplesEspana {
    euro(dinero) {
        return new Intl.NumberFormat("es-ES", { style: "currency", currency: 'EUR' }).format(dinero)
    }

    doc(doc) {
        if (typeof doc === 'string') {
            let simples = 'Simples.js:'
            return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js')
        } else {
            return console.log('Error: Porfavor escribe cómo una STRING!')
        }
    }
}