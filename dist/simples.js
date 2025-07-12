function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Simples.js
import validator from "validator";
var isEmail = validator.isEmail,
  isMobilePhone = validator.isMobilePhone;
export var simplesMath = /*#__PURE__*/function () {
  function simplesMath() {
    _classCallCheck(this, simplesMath);
  }
  return _createClass(simplesMath, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }, {
    key: "sub",
    value: function sub(x, y) {
      return x - y;
    }
  }, {
    key: "mult",
    value: function mult(c, d) {
      return c * d;
    }
  }, {
    key: "div",
    value: function div(a, z) {
      if (z === 0) {
        return Infinity;
      } else {
        return a / z;
      }
    }
  }, {
    key: "sqrt",
    value: function sqrt(number) {
      return Math.sqrt(number);
    }
  }, {
    key: "squared",
    value: function squared(number) {
      return number * number;
    }
  }, {
    key: "log",
    value: function log(number) {
      return Math.log(number);
    }
  }, {
    key: "log10",
    value: function log10(number) {
      return Math.log10(number);
    }
  }, {
    key: "round",
    value: function round(number) {
      return Math.round(number);
    }
  }, {
    key: "power",
    value: function power(base, expo) {
      return Math.pow(base, expo);
    }
  }, {
    key: "random",
    value: function random(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "randomInt",
    value: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "pow10",
    value: function pow10(number) {
      return Math.pow(10, number);
    }
  }, {
    key: "mod",
    value: function mod(n1, n2) {
      return n1 % n2;
    }
  }, {
    key: "factorial",
    value: function factorial(number) {
      if (number < 0) return "Sorry, but the number is not positive. Desculpe mais o número não é positivo. Lo sentimos, pero el número no es positivo.";
      var r = 1;
      for (var i = 1; i <= number; i++) {
        r *= i;
      }
      return r;
    }
  }, {
    key: "abs",
    value: function abs(number) {
      return Math.abs(number);
    }
  }, {
    key: "pi",
    value: function pi(value) {
      return Math.PI;
    }
  }]);
}();
export var simplesUtils = /*#__PURE__*/function () {
  function simplesUtils() {
    _classCallCheck(this, simplesUtils);
  }
  return _createClass(simplesUtils, [{
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number' && !isNaN(value);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return Array.isArray(value);
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
    }
  }, {
    key: "formatadorDate",
    value: function formatadorDate(date) {
      // Português y Español
      var d = new Date(date);
      var dia = String(d.getDate() + 1).padStart(2, '0');
      var mes = String(d.getMonth() + 1).padStart(2, '0');
      var ano = d.getFullYear();
      return "".concat(dia, "/").concat(mes, "/").concat(ano);
    }
  }, {
    key: "formatDate",
    value: function formatDate(date) {
      // English
      var d = new Date(date);
      var day = String(d.getDate() + 1).padStart(2, '0');
      var month = String(d.getMonth() + 1).padStart(2, '0');
      var year = d.getFullYear();
      return "".concat(month, "/").concat(day, "/").concat(year);
    }
  }, {
    key: "reverseString",
    value: function reverseString(string) {
      return string.split('').reverse().join('');
    }
  }, {
    key: "isEmail",
    value: function isEmail(email) {
      return validator.isEmail(email);
    }
  }, {
    key: "isTelephone",
    value: function isTelephone(number, country) {
      return validator.isMobilePhone(number, country);
    }
  }, {
    key: "Console",
    value: function Console(value) {
      return console.log(value);
    }
  }]);
}();
export var simplesElement = /*#__PURE__*/function () {
  function simplesElement() {
    _classCallCheck(this, simplesElement);
  }
  return _createClass(simplesElement, [{
    key: "creatorElement",
    value: function creatorElement(element) {
      var item = document.createElement(element);
      document.body.appendChild(item);
      return item;
    }
  }, {
    key: "childElement",
    value: function childElement(dad, element) {
      dad.appendChild(element);
    }
  }, {
    key: "textElement",
    value: function textElement(element, text) {
      element.textContent = text;
    }
  }]);
}();
export var simplesBrasil = /*#__PURE__*/function () {
  function simplesBrasil() {
    _classCallCheck(this, simplesBrasil);
  }
  return _createClass(simplesBrasil, [{
    key: "cafe",
    value: function cafe(timer) {
      // pause
      var time = timer * 1000;
      return setTimeout(function () {
        console.log('Pausa pra tomar um Café ☕.', "J\xE1 se passou ".concat(time / 1000, " segundos"));
      }, time);
    }
  }, {
    key: "real",
    value: function real(dinheiro) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(dinheiro);
    }
  }, {
    key: "AbreOolho",
    value: function AbreOolho() {
      var simples = 'Simples.js:';
      return console.log(simples, 'Abre o Olho, Animal!');
    }
  }, {
    key: "doc",
    value: function doc(_doc) {
      if (typeof _doc === 'string') {
        var simples = 'Simples.js:';
        return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js');
      } else {
        return console.log('Error: digite como uma STRING!');
      }
    }
  }, {
    key: "sinal",
    value: function sinal() {
      return alert('Simples JS: Tá ai seu Sinal!');
    }
  }, {
    key: "dolar",
    value: function dolar(dindin) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol"
      }).format(dindin).replace('$', 'US$');
    }
  }, {
    key: "euro",
    value: function euro(dindin) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
      }).format(dindin);
    }
  }, {
    key: "independencia",
    value: function independencia(string) {
      if (typeof string === 'string') {
        return '07 de Setembro de 1822';
      } else {
        return 'Error: digite como uma STRING!';
      }
    }
  }]);
}();
export var simplesUSA = /*#__PURE__*/function () {
  function simplesUSA() {
    _classCallCheck(this, simplesUSA);
  }
  return _createClass(simplesUSA, [{
    key: "dollar",
    value: function dollar(money) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol"
      }).format(money);
    }
  }, {
    key: "real",
    value: function real(money) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BRL"
      }).format(money);
    }
  }, {
    key: "euro",
    value: function euro(money) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR"
      }).format(money);
    }
  }, {
    key: "pause",
    value: function pause(timer) {
      var time = timer * 1000;
      return setTimeout(function () {
        console.log('Pause Now!');
      }, time);
    }
  }, {
    key: "doc",
    value: function doc(_doc2) {
      if (typeof _doc2 === 'string') {
        var simples = 'Simples.js:';
        return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js');
      } else {
        return console.log('Error: please write like a STRING!');
      }
    }
  }]);
}();
export var simplesEspana = /*#__PURE__*/function () {
  function simplesEspana() {
    _classCallCheck(this, simplesEspana);
  }
  return _createClass(simplesEspana, [{
    key: "euro",
    value: function euro(dinero) {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: 'EUR'
      }).format(dinero);
    }
  }, {
    key: "dolar",
    value: function dolar(dinero) {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD"
      }).format(dinero);
    }
  }, {
    key: "real",
    value: function real(dinero) {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "BRL"
      }).format(dinero);
    }
  }, {
    key: "doc",
    value: function doc(_doc3) {
      if (typeof _doc3 === 'string') {
        var simples = 'Simples.js:';
        return console.log(simples, 'https://github.com/arthurferreira-dev/Simples.js');
      } else {
        return console.log('Error: Porfavor escribe cómo una STRING!');
      }
    }
  }]);
}();