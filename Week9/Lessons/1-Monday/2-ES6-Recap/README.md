| Title | Type | Duration | Author | 
| -- | -- | -- | -- |
| ES6 Recap | Lesson | 1:25 | Suresh Melvin Sigera |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) ES6 

## LEARNING OBJECTIVES

*After this lesson, you will be able to:*
- Differentiate between ES6 and earlier ECMAScript versions.
- Explain the need for transpiling JavaScript code.

## LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Opening    | Discuss lesson objectives |
| 15 min | Demo   | A Brief History of JavaScript  |
| 45 min | Exercise | ES6 Practice |
| 15 min | Demo     | Meet the Transpiler |
| 5 min  | Conclusion | Review / Recap   |

## Introduction (5 min)

Before we get into the nitty gritty of React, we're going to return to JavaScript, the language React is based on - specifically, the version of JavaScript known as ES6 (spoiler alert: you already know a TON about this).

-----

## A Brief History of JavaScript (15 min)

To talk about ES6, it actually makes sense to start all the way back at ES1.

JavaScript was created in 1995, and standardized as ECMAScript in 1997 with a version called ES1.

> **Cool, what's ECMASript?** It's the official name for JavaScript, the standard that the language is based on, and for our purposes, it *is* JavaScript.

In 1999, ES3 was released with many of the features that we commonly use in JavaScript today. Then, in 2009, ES5 was officially finalized and settled as the widespread standard for JS for the explosion of web browsers, such as Firefox, Chrome, Opera, Safari, and many others.

ES6, also called ES2015, refers to a new set of language features that were added to the ECMAScript standard in 2015. 2015?! Yes, that was a while ago now, but browsers are still in the process of adopting the new features.

### What's the big ES6 deal?

The language features of ES6 are awesome. They enable you to write more concise, easier-to-read, and easier-to-maintain code. They also make your code more fun to write!

The drawback? It will take some time before ES6 is universally supported all across the Internet. In 2019, the latest version of Google Chrome has 97% of features implemented and Safari has 100% of the features implemented. You can check the current support of ES6 features for all engines [here](http://kangax.github.io/compat-table/es6/).

### ES6 in Action

Okay okay, enough with the history lesson. Let's see what ES6 *actually* looks like.

```js
let name = 'Michele';
const greeting = `Hi, ${name}.`;
````

... Wait. Isn't that just the regular old JavaScript that we already learned?!

And lucky for you: IT IS! When we learned JS earlier in the course, we learned much of it with ES6 syntax. (Remember how we told you not to use `var`? Yeah, that was an ES6 thing.)

**Some other ES6 things you already know:**
- Promises
- Spread operator
- Arrow functions

---

## Practicing ES6 (45 min)

We haven't done JavaScript in a while, so let's practice!

Open the code in `exercises` directory. For some of the problems, you'll need to convert code from ES5 to ES6. In others, you'll need to write ES6 from scratch.

Complete as many problems as you can in the next 40-45 minutes.

---

## Meet the Transpiler (15 min)

Until all ES6 features are universally supported, we need a way of converting ES6 into compatible (read: older) JavaScript code. This is where *transpiling* comes in. 

Transpiling (transformation + compiling) is a technique in which we use special tools to transform ES6 code into its closest equivalent, ES5 code, to work on older browsers or environments.

Consider the following ES6 code block:

```javascript
const students = ["John", "Mike", "Melvin"];
let store = {
        students
};
store.students; // ["John", "Mike", "Melvin"]
```

This roughly transpiles to:

```javascript
var students = ["John", "Mike", "Melvin"];
var store = {
        students: students
};

store.students; // ["John", "Mike", "Melvin"]
```

You can run and transpile small pieces of ES6 code online in your browser through ES6 REPLs like [JS Fiddle](https://jsfiddle.net/) or [Babel](https://babeljs.io/). But for larger projects, you would need to use a more robust transpiler (Babel has a larger-scale version for Enterprise projects).

### Try it!

Open up the exercises you just completed. Copy and paste the ES6 code into the [Babel transpiler](https://babeljs.io/repl). 

What is the output? How does it compare to the answers you got yourself?

----

## Command Line JavaScript and node.js

JavaScript was created as a language to run exclusively in browsers (and it still mostly is), but JavaScript's utility exploded with the introduction of node.js, a command line tool for running JavaScript and giving it access to computer file systems. Although node.js (or just node) wasn't the first project for running JavaScript outside of browsers, it is by far the most popular.

node can be downloaded through many package managers. Once it is downloaded and installed, it should give access to three command-line tools:

    node: this is the basic command for running JavaScript files and scripts. For node beginners, this is most useful for running without any arguments, which will open a node REPL similar to the console in most browsers.
    npm: the node package manager is used for downloading, updating, configuring, and generally managing JavaScript libraries, and will likely be the most commonly used node tool for most developers.
    npx: this is a package runner, and is used to retrieve and immediately execute node packages. Certain node packages are designed as command line tools themselves, and npx is a way to execute them. For an example, try npx cowsay moo.

----

## Conclusion (5 min)

This all sounds great, but can we just get back to React now? 

If you look at the React docs, you'll see they are written with the assumption that the reader is familiar with ES6. Modern JavaScript language features (ES6, ES7, and beyond) are widely used in the React development community. While you are already familiar with ES6 and won't be thrown by seeing it... not all browsers will react the same.

