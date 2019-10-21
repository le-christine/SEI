---
title: Babel Lab
type: lab
duration: "1:30"
creator:
    name: Alex Wasson
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Babel Lab

## Requirements

Configure Babel to run in the `practice-set` folder, use `practice-set/problems` as its entry, and output to `practice-set/lib`.

For the three problem sets below, solve each problem using idiomatic ES6+, and use Babel to convert your code to current JavaScript that can run in 99.5% of living browsers, including Internet Explorer 11. Write the code for each problem set in its own file in [`practice-set/problems`](./practice-set/problems).

Installing Babel

Babel is a suite of transpilation tools. The key part is @babel/core, and the command line tool to control it is @babel/cli. A sample installation of Babel would be: npm install --save-dev @babel/core @babel/cli.
Configuration

@babel/cli provides a command, babel, which takes, as an argument, the name of the directory it will read recursively for JavaScript files to transpile. If the babel command receives the -d flag, it will accept, as a second argument, the name of the directory into which it should put transpiled files. babel, however, is a node tool, not a traditional command line tool, and so calling babel from the command line will not succeed. Instead, any babel commands a developer expects to use (or, indeed, any node tool commands) should be entered into the scripts object in package.json, with the command itself as a value and the command's nickname as a key.

To use any of the scripts written in the scripts object, simply run npm run followed by the script's nickname.

    Directly running Babel with @babel/cli, as documented here, is actually a relative rarity in real world development. For the most part, developers will configure and interact with higher level build tools that configure and run things like Babel by themselves. Babel is, however, a good tool for practicing npm's installation and configuration process.


### Problem Set 1

Solve each of the following prompts and transpile them using the Babel preset [`preset-env`](https://babeljs.io/docs/en/babel-preset-env).

- Using arrow function format, write a function that will log `'Hello Babel!'`.
- Using a string template, write a function that accepts a string, `name`, as an argument and logs `'Hello [name]!'`.
- Using spread syntax, write a function that takes two objects as arguments and returns a new object combining all of the key-value pairs from each object. If the two arguments have matching keys, the key-value pairs from the first object should overwrite those of the second.

### Problem Set 2

Solve each of the following prompts and transpile them with Babel's `preset-env` and the [`core-js`](https://github.com/zloirock/core-js/tree/master#installation) polyfill library that's included.

- Define a Promise that will, when it resolves successfully, log `'Success!'` and, when it fails, emit a `console.error` message of `'Failure!'`.
- Write a `fetch()` call targeting `http://worldtimeapi.org/api/ip` that logs the object that's returned.

### Problem Set 3

Configure Babel to use the presets `preset-env` and [`preset-react`](https://babeljs.io/docs/en/babel-preset-react) and the [class properties plugin](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties). Then, use it to transpile [`problem-set-3.js`](./practice-set/problems/problem-set-3.js). `practice-set/problem-set-3.html`, when opened in a browser, will display `'Hello World!'` once you succeed.

Some notes on this problem set:
- `preset-react` provides transpilation of JSX — that weird HTML-like syntax in `problem-set-3.js`.
- The class properties plugin provides support for the (as of yet unofficial but mostly stable) [class field proposal]('https://github.com/tc39/proposal-class-fields'), which, while not necessary for React, makes writing React methods simpler.

## Starter Code

Starter files for each problem set can be found in `practice-set/problems`. The files for the first two problems are just scaffolds for writing your code. `problem-set-3.js` is a simple React application designed to run with `practice-set/problem-set-3.html` once it's been transpiled.

## Deliverable

You should have the following key products: the code you wrote in `problem-set-1.js` and `problem-set-2.js`, the transpiled JavaScript files for each of the problem sets, and the configuration files (`package.json`, `.babelrc`) you created to use with Babel.
