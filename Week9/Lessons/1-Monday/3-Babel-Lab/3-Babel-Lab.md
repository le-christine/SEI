---
title: Babel Lab
type: lab
duration: "h:mm"
creator:
    name: Alex Wasson
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Babel Lab

## Requirements

Configure Babel to run in the `practice-set` folder, to use `practice-set/problems` as its entry and to output to `practice-set/lib`.

For the three problem sets below, solve each problem using idiomatic ES6+ and use Babel to convert your code to current JavaScript that can run in 99.5% of living browsers, including Internet Explorer 11. Write the code for each problem set in its own file in [practice-set/problems](./practice-set/problems).

If you need review on transpilation and using JavaScript in the command line, look at [Transpilation Review](./transpilation-review.md).

### Problem Set 1

Solve each of the following prompts and transpile them using the Babel preset [`preset-env`](https://babeljs.io/docs/en/babel-preset-env).
- Using arrow function format, write a function that will log 'Hello Babel!'.
- Using a string template, write a function that accepts a string, `name`, as an argument and logs 'Hello [name]!'
- Using spread syntax, write a function that takes two objects as arguments and returns a new object combining all the key-value pairs from each object. If the two arguments have matching keys, the key-value pairs from the first object should overwrite those of the second.

### Problem Set 2

Solve each of the following prompts and transpile them with Babel's `preset-env` and the [core-js](https://github.com/zloirock/core-js/tree/master#installation) polyfill library included.
- Define a `Promise` that, when it resolves successfully, will log 'Success!', and that, when it fails, will emit a `console.error` message of 'Failure!'.
- Write a `fetch` call targeting `http://worldtimeapi.org/api/ip` that logs the object that is returned.

### Problem Set 3

Configure Babel to use the presets `preset-env` and (`preset-react`)[https://babeljs.io/docs/en/babel-preset-react] and the [class properties plugin](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) and then use it to transpile [`problem-set-3.js`](./practice-set/problems/problem-set-3.js). `practice-set/problem-set-3.html`, when opened in a browser, will display 'Hello World!' once you succeed. Some notes on this problem set:
- `preset-react` provides transpilation of JSX, the weird HTML-like syntax in `problem-set-3.js`
- the class properties plugin provides support for the as yet unofficial but mostly stable [class field proposal]('https://github.com/tc39/proposal-class-fields'), which, while not necessary for React, makes writing React methods simpler

## Starter Code

Starter files for each problem set can be found in `practice-set/problems`. The files for the first two problems are just scaffolds for writing your code. `problem-set-3.js` is a simple React application designed to run with `practice-set/problem-set-3.html` once it has been transpiled.

## Deliverable

You should have the following key products: the code you wrote in `problem-set-1.js` and `problem-set-2.js`, the transpiled current JavaScript files for each of the Problem Sets, and the configuration files (`package.json`, `.babelrc`) you created to use with Babel.
