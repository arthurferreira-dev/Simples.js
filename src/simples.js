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
}

module.exports = simplesMath;