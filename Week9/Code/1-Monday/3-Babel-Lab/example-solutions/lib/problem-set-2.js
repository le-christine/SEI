"use strict";

require("core-js/stable");

// Define a `Promise` that, when it resolves successfully, will log 'Success!', and that, when it fails, will emit a `console.error` message of 'Failure!'
var p = Promise.resolve(function () {
  return console.log('Success!');
}).reject(function () {
  return console.log('Failure!');
}); // Write a `fetch` call targeting `http://worldtimeapi.org/api/ip` that logs the object that is returned

fetch('http://worldtimeapi.org/api/ip').then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
});