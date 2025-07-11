"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Simples.js
var simplesMath = /*#__PURE__*/function () {
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
  }]);
}();
module.exports = simplesMath;