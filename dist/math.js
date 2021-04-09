"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.c = exports.h = exports.p = void 0;

// Calculate exponent of the given number
function pow(base) {
  var exponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Math.pow(exponent, base);
}

var p = pow(5, 9); // Calculate the hypotenuse using Pythagore's theorem

exports.p = p;

function hypotenuse(adjacent, opposite) {
  var hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: hypotenuse
  };
}

var h = hypotenuse(8, 11); // Calculate the area of a circle

exports.h = h;

function circleArea(radius) {
  return radius * radius * Math.PI;
}

var c = circleArea(8); // A constant that has the approximate value of PI

exports.c = c;
var A = Math.PI;
exports.A = A;