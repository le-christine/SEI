# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Functions and Scope | Lesson | 2:00 | Sonyl Nagale (adapted from SEI) |

# Functions and Scope

## Objectives

*After this lesson, students will be able to:*

- Describe why functions are created.
- Use functions to break programs into smaller subprograms.
- Describe how parameters relate to functions.
- Define scope.
- Compare global and local scope.
- Describe the `this` keyword and how context affects it.

## Student Preparation

*Before this lesson, students should already be able to:*

- Write basic JavaScript.
- Use a text editor.
- Use basic JavaScript types and declare variables.

## Instructor Preparation
*Before this lesson, instructors will need to:*
- Read through the lesson.
- Add additional instructor notes as needed.
- Edit language or examples to fit your ideas and teaching style.
- Open, read, run, and edit (optional) the starter and solution code to ensure that it's working and you agree with how the code was written.

## Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Introduction | Keep Your code DRY Using Functions |
| 10 min  | Demo  | Defining Functions |
| 10 min  | Demo  | Calling Functions |
| 10 min  | Introduction | Compilation |
| 10 min  | Introduction | Variable Scope |
| 20 min  | Demo | Building Scope |
| 20 min  | Demo | The Terminology of Scope  |
| 10 min  | Demo | The `this` Keyword  |
| 20 min  | Independent Practice | Write Some Functions |
| 5 min  | Conclusion | Review/Recap |

## Keep Your Code DRY Using Functions (5 min)

A function is a statement or group of statements that can be called anywhere in the program so that the statements it contains don't need to be written over and over again.

When writing functions in JavaScript, think of functions as an object such as a string or number. This means that functions can be passed to other functions as an argument and used just like any other object with which we've worked. Be DRY: **Don't Repeat Yourself**.

Functions are essential for writing JavaScript and keeping the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

---

## Code-Along: Defining Functions (10 min)

A function can be defined using two different syntaxes. For example, we can define a function (`speak()`) that receives one argument in either of the following ways:

```js
const speak = function(words){
  console.log(words);
}

function speak(words){
  console.log(words);
}
```

The difference is subtle but important. The first function *expression* is assigning an _anonymous_ function to a variable. The second function *declaration* is a named function. The practical difference is that the named function will be processed when the code is interpreted, so the function can be called before it's defined.

> **Fun fact**: JavaScript typically runs top to bottom; however, it does a pass-through before running anything to bring things such as global variable and function declarations to the top! This phenomenon is known by the fancy term "hoisting." Learn more about it in [this Medium article](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)!

No matter which syntax you use, a function always has:

- A name, or a named variable that holds it.
- An optional list of parameters:
    - Information the function will use.
    - Defined inside the parentheses before the opening curly brace.
- Statements inside the function:
    - Code executed every time the function is called.

### Arrow Functions

ES6 introduced a new syntax for function expressions: **arrow functions**. Here's an example:

```js
const speak = (words) => {
  console.log(words);
}

speak('Hello World');
```

One of the powers of arrow functions is the ability to define **default parameters**:

```js
const speak = (words = 'hello') => {
  console.log(words);
}

speak();
```

---

## Calling Functions (10 min)

Calling a function will execute the code defined inside this function.

Defining and calling a function is different: A function will not be called when it's defined. Think of declaring a function as writing some code that you'll come back to use at a later time.

You call (or *invoke*) a function by using parentheses after the function's name (`()`):


```js
// This defines the function.
const hello = function() {
  console.log("hello there");
}

// This actually runs it!
hello();

=> hello there
```

### The Spread Operator

Another ES6 introduction is the **spread operator**. With the syntax below, we can call a function with an unspecified number of arguments:

```js
const hello = (...args) => {
  console.log(args);
}

hello('hello', 'world');
=> ['hello', 'world']
```

As you can see, `args` is interpreted as an array holding zero or more arguments that you choose to provide.

### Passing a Function as an Argument

A function can be passed as an argument to another function:

```js
function sayHello(name) {
  return 'hello ' + name;
}

function shout(a, foo) {
  console.log(foo(a));
}

shout('world!', sayHello);
```

---

## Compilation (10 min)

Before we talk about scope, there are a few things to understand prior to considering what scope actually means.

The code you write must _first_ be translated into a form the computer can read.

Your source code is _human readable_. However, this source code must then be translated into a bunch of 1s and 0s that a computer's CPU can understand.

The CPU is a chip on the computer that does all of the processing. It's called the **central processing unit** (CPU).

In **compilation**, source code is translated into a syntax the CPU can understand.

### Compiled Languages

Some languages are *explicitly* compiled. In other words, the programmer must run particular commands to invoke compilation.

For example, the **C**, **C++**, and **Java** languages are *explicitly* compiled. The programmer must run a command such as:

`gcc -o hello_world -c hello_world.c`

This is done to translate the C code in the `hello_world.c` file into an *executable* or *binary* file that contains the 1s and 0s the CPU understands.

*gcc* is a **C** compiler.

So, here's what happens:

`Source Code`  ==>  `1s and 0s`

`hello_world.c`  ==>  `hello_world`

### Interpreted Languages

Some languages don't require the programmer to explicitly run a compiler. **JavaScript**, **Python**, and **Ruby** are a few examples of these _interpreted languages_.

There is still compilation being performed, but it's done automatically.

#### From Source to Running Code

There are two basic phases involved when it comes to going from code in a file to a running program.

1. **Compile Time**

A phase when the source code is translated to another form. For example, when we run a JavaScript program, we will compile JavaScript into an intermediate language/bytecode that the JavaScript Virtual Machine (VM) understands.

2. **Runtime**

A phase when the computer actually runs each statement in the program. For example, this is when the computer runs the JavaScript program bytecode.

---

## Variable Scope (10 min)

The variable scope describes where in a program a variable can be "seen." In other words, where it can be used. We'll see more later, but you've seen that variables declared within a function cannot be seen or used outside of that function. Functions and variables that are not inside any other scope (such as another function) are living in the **global scope**. Any part of the program can access the global scope.

### Lexical Analysis

Part of the compilation phase is _lexical analysis_. In general, lexical analysis scans through the source code one character at a time, looking for language constructs such as variables, functions, built-in keywords, etc.

It's during this time that the compiler builds variable scope and **declares** variables inside of a variable scope.

Here's a quick summary of what your computer does when you're looking to run your JavaScript file:

1. Reads the source code in a JavaScript file into memory.
1. Compiles the source code.
    1. Performs lexical analysis.
    1. Builds scope.
    1. Turns source code into a form understood by VM: bytecode.
1. Executes bytecode.

---

## Code-Along: Building Scope (20 min)

Scope is built during the lexical analysis portion of the compilation phase. Once this scope is built, it's called **lexical scope**. This is very common in many programming languages.

Let's see how it works. Here's the code we'll work with:

<!-- NOTE TO INSTRUCTOR: You might want to ask students to take a few minutes to break down the functionality in these functions. -->

```javascript
let firstName = 'John';
let lastName = 'Dowd';
let age = 19;

function displayPerson(fname, lname) {
  let prefix = 'Mr';
  let fullName = null;

  function getFullName() {
    let suffix = "Esq.";  // Everybody's a lawyer, eh.
    return fullName = `${prefix} ${fname} ${lname} ${suffix}`;
  };

  return getFullName();
};

function removeYears() {
  let minusYears = 10;
  let age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName));
console.log(removeYears());
```

**Step by Step**: What's happening under the hood?

1. Found `let firstName` variable declaration. Put `firstName` variable in global scope.  
1. Found `let lastName` variable declaration. Put `lastName` in global scope.  
1. Found `let age` variable declaration. Put `age` in global scope.  
1. Found `let displayPerson` declaration.  
1. Notice that `displayPerson()`'s value is a function. So, create an inner scope and process this function.
1. Found the `fname` and `lname` declarations. (Note: Functions arguments behave just like local variables. Put them in the `displayPerson()` function scope.)
1. Found `let prefix` variable declaration. Put `prefix` in `displayPerson()` function scope.
1. Found `let fullName` variable declaration. Put `fullName` in `displayPerson()` function scope.
1. Found `getFullName()` declaration.
1. Notice that `getFullName()` is a function. So, create an inner scope and process this function.
1. Found `let suffix` variable declaration. Put `suffix` in `getFullName()` function scope.
1. All done with `getFullName()` function, no more variable declarations.
1. All done with `displayPerson()` function, no more variable declarations.
1. Found `removeYears()` function declaration. Put `removeYears()` in global scope.  
1. Notice that `removeYears()` value is a function. So, create an inner scope and process this function.
1. Found `minusYears` variable declaration. Put this in the `removeYears()` function scope.
1. Found `age` variable declaration. Put this in the `removeYears()` function scope.

**Whoa! Another Age?!**

So, we have another variable called `age` in the global scope from the third line. Now, we have a second `age` variable inside of the `removeYears()` function.

**Mini Pop Quiz:** Which one wins?

<details>
    <summary>The answer</summary>


    It turns out that it's totally legal to have two variables in different scopes with the same name. The one with the more specific (or smaller) scope wins. In this case, the age variable inside the removeYears() function wins. So, inside of the removeYears() function, age is 49. However, once we exit that function, that local age variable ceases to exist and we revert to using the age variable from the global scope. So outside the function, age is once again equal to 19.
</details>


Did you get all that? JavaScript is actually doing a lot with a relatively small amount of code. Here are a couple ways to visualize scope in the above scenario.

---

## Code-Along: The Terminology of Scope (20 min)

There are different terms for scope in JavaScript. If you read about `(function|global|lexical|public/private scope)` or `closure` or `namespace`, all of these keywords are referring to the `scope` in one way or another.

### Global Scope

Before you write a line of JavaScript, you're in what we call the `global scope`. If we declare a variable, it's defined globally:

```js
let name = 'Gerry';
```

Global scope can be really confusing when you run into namespace clashes. You won't want to use global scoping for all of your variables, as using global scope the right way is quite complex. But every JavaScript program uses global scope in one way or another.

> **Fun tangent**: If time permits, check out what [namespace](http://www.codeproject.com/Articles/829254/JavaScript-Namespace) means in JavaScript. It can be super useful in large-scale JavaScript applications!

### Local Scope

Local scope refers to any scope that's defined past the global one. If you define a function, this function will have its own scope inside the body of the function. Any function defined inside another function also has a local scope and can refer to the parent scope, but this logic doesn't work the other way around. In other words, child scope can see variables in the parent scope, but we can't access variables in the child scope from the parent scope!

#### Function Scope — Can't Get Inside From Outside!

A variable defined inside a function can't be accessed outside the function. This is the scope function:

```js
let a = "this is the global scope";
function myFunction() {
	let b = "this variable is defined in the local scope";
}

myFunction();
console.log(b);
```

This will throw a reference error, because the variable, `b`, is not accessible outside of the scope of the function where it is defined. This is because `b` is declared in the local scope of `myFunction()`!

### Accessing Variables in the Parent Scope

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables in the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```js
// Global Scope
let a = "Hello";

// This function is defined in the global scope.
function sayHello(name) {
	return `${a} ${name}`;
}

sayHello("SEI");
=> "Hello SEI"
```

### Nested Function Scope

When a function is defined inside another function, it's possible to access variables defined in the parent from the child:

```js
  let a = 1;

  function getScore () {
    let b = 2,
    c = 3;

    function add() {
      return a + b + c;
    }

    return add();
  }

  getScore();
  => 6
```

---

## Code-Along: The `this` Keyword (10 min)

A function's `this` keyword always refers to the current context. It's a little tricky to conceptualize `this` when you first hear about it, but keep trying, because `this` is a very important and useful thing!

**Scope or Context?**

These two words are often conflated! Context generally refers to `this` or the "owner" of the currently executing code. Scope refers generally to function scope and local variable visibility. If you want to learn more, [this article](http://ryanmorr.com/understanding-scope-and-context-in-javascript/) is a good place to start.

### `this` in the Global Scope

In the global scope, `this` refers to the global object (typically your `window` object if you're using a browser):

```javascript
this === window
=> true

this.document === document
=> true

this.aValue = "SEI";
=> "SEI"

console.log(window.aValue);
=> "SEI"
```

---

## Independent Practice: Write Some Functions (20 min)

Work through as many of these exercises as you can within the next 20 minutes. Use the [starter code](starter-code) provided!

#### 1. Write a `lengths` function that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

```js
const words = ["hello", "what", "is", "up", "dude"];
lengths(words);  # => [5, 4, 2, 2, 4]
```

<details>

    <summary>Need a hint?</summary>

    In order to get to each word in the words array, write a for loop inside your function! You can access each element inside the for loop with words[i].

</details>

<details>

    <summary>Another hint?</summary>

    Each string and array has an inherent .length property. Thus, inside your for loop, you can access the length of the string like so: words[i].length.

</details>

#### 2. Write a JavaScript function called `transmogrifier()`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of `5`, `3`, and `2` is `(5 times 3) to the power of 2` (that is, `225`). Use your function to find the following answers:

```js
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);
```

<details>

    <summary>Need a hint?</summary>

    Remember the `Math` object? You can use its `Math.pow()` function to evaluate the exponent.

</details>

#### 3. Write a function, `wordReverse()`, that accepts a single argument: a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

```js
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line")
# => "line the on back Hans Put"
```

<details>

    <summary>Need a hint?</summary>

    Look up the built-in string method split(). Can you use this to your advantage?

</details>

---

## Conclusion (5 min)

The only way to master JavaScript scope is to practice, practice, practice. You'll have a lot of confusing errors with the JavaScript you write at the beginning of your programming journey! This will force you to name variables and functions the right way to make sure there are no conflicts.

- Describe a function.
- Explain what happens before JavaScript code is executed.
- Explain the difference between local and global scope.

There are more details about functions and scope [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
