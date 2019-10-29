"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Using arrow function format, write a function that will log 'Hello Babel!'
var func = function func() {
  return console.log('Hello Babel!');
}; // Using a string template, write a function that accepts a string, `name`, as an argument and logs 'Hello [name]!'


var greet = function greet(name) {
  return console.log("Hello ".concat(name));
}; // Using spread syntax, write a function that takes two objects as arguments and returns a new object combining all the key-value pairs from each object. If the two arguments have matching keys, the key-value pairs from the first object should overwrite those of the second


var blend = function blend(obj1, obj2) {
  return _objectSpread({}, obj2, {}, obj1);
};