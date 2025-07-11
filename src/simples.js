// Simples.js

class simplesMath {
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
}

class simplesUtils {
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
}

module.exports = { simplesMath, simplesUtils };