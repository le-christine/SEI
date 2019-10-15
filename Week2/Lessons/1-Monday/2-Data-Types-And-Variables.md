| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Data Types and Variables | Lesson | 2:30 | Sonyl Nagale (adapted from SF-SEI) |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Data Types and Variables

## Learning Objectives

*After this lesson, students will be able to:*
- Declare a variable using `let` and `const`.
- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Practice proper JavaScript syntax and semantic variable naming.

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Introduction  | Overview of JavaScript |
| 20 min | Demo            | Variables |
| 30 min | Guided Practice | Data Types |
| 20 min | Guided Practice | Arithmetic Operators |
| 15 min | Guided Practice | String Concatenation and Coercion |
| 15 min | Guided Practice | Assignment Operators |
| 15 min | Guided Practice | The Math Object |
| 15 min | Guided Practice | Helper Methods |
| 10 min | Introduction    | Best Practices |
| 5 min  | Conclusion  | Review/Recap |

----

## Overview (5 min)

JavaScript (JS) is a programming language used to create rich experiences on most websites and other pieces of technology. JavaScript was created by Brendan Eich in 1995 and has been a fundamental building block of the web ever since.

Back in the day, the web was originally text-only. JavaScript arose to fill a need on the web that HTML, CSS, and back-end languages such as Java or C++ simply could not meet: creating engaging interactions and intuitive interfaces.

One of JavaScript’s primary purposes is to enable more sophisticated interaction between users and browsers. JavaScript can respond to user input without needing to communicate with a back-end server, making it flexible and fast. That being said, JavaScript is also used on the server side, which makes it unique (most languages only work on one side: browser or server).

Over the years, there have been many different versions of JavaScript released, each with small changes to make the language more powerful and easier to use. We'll be using the version called **ES6**, which is the latest version of JavaScript in general use.

> **Remember**: JavaScript is NOT the same thing as Java. In fact, they don't have much in common at all, as you'll quickly learn.

---

## Variables (20 min)

Variables are used to store data types into the memory of the computer so they can be referenced later. Think of them as special containers that can hold information for you.

![](./images/variable_container.png)

### Declaring Variables

In order to use a variable in JavaScript, you must announce that you want to use it. This is called a variable *declaration*, and it sets aside memory to store the value you want to keep in it later.

You make this announcement by using `let` or `const` plus the name of the variable. Here's what it looks like:

```javascript
const myVariable = 1;
```

or

```javascript
let myVariable = 1;
```

When we declare a variable, we can call it whatever we want. It's a best practice to give the variable a name that tells you something about what it is.

And notice how the second word is capitalized? In JavaScript, we name variables using "camelCase:" The first letter is always lower case and any later words are capitalized:

```js
myVariable
camelCase
javascriptIsGreat
```

JavaScript is case-sensitive; a variable named `myVariable` is different than `myvariable`, `MyVariable`, or `mYVarIaBLE`. For consistency and clarity, you should **always use camelCase**. There are other conventions that you may see (`Pascal Case`: `MyVariableIsTheBest`, `Snake Case`: `my_variable_is_the_best`, `kebab case`: `my-variable-is-the-best`) which are used by different languages. For consistency and clarity, stick with camelCase for JavaScript; for other languages, look up code examples to see their conventions.

### `const`

`const` is short for "constant." It implies: "I am declaring a variable that will not be changed." A `const` **can't be reassigned**.

If I assign a `const` to a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) data type (e.g., a string, number, or Boolean), I can't change its value at all. (And yes, as with most things, there are exceptions to this rule that we'll learn about soon.)

```javascript
const hi = 'hello';
hi = 'goodbye'; // This line throws an error because I attempted to change a const!
```

> **Tip**: Try to use `const` whenever possible to maintain predictability.

### `let`

So, that's `const`. The other way to declare variables is `let`.

The value and reference of a `let` variable can change, so this will run with no errors:

```javascript
let hi = 'hello';
hi = 'goodbye';
console.log(hi); // 'goodbye'
```

> **Note**: The `console.log()` statement is JavaScript's way of printing things out so you can see what's going on under the hood.

`let` can be reassigned as much as you like.

### `var`

For legacy purposes, let's talk about `var`. Its use is _essentially_ the same as `let`, in that you can reassign a `var` at any point in your program. Unless you have a _very_ specific need to use `var` (such as maintaining legacy code or supporting older browsers), you should use `let` or `const`. The main difference is that the scope of var is global, which is never a good thing. We can go into more detail later on in the course, but suffice to say, if there is any way to avoid using a global variable, avoid it!

### Reassigning Variables

JavaScript runs synchronously and top-down, meaning that it updates itself to the latest information given (on the bottom).

Thus, the values we give our variables furthest down will become our new values at the end.

Let's take a look at a brief example. Say that we want to create variables for a character's name, age, and location:

```JavaScript
let name = "Santa";
let age = 1748;
let location = "North Pole";
```

We can later replace, or reassign, the values of these variables, like so:

```JavaScript
name = "Bruce";
age = 35;
location = "Gotham City";

```

---

## Data Types (30 min)

Earlier, we mentioned that you can add different types of values to JavaScript variables.

> **Definition**: In computer science and programming, a data type (or simply "type") identifies the family of the value, the operations that can be done on values of that type, the meaning of the data, and the way values of that type can be stored.

Data types are fairly similar across different languages. Confidence in working with these concepts is one of those things that will enable you to interact with any programming language!

| 1. Numeric | 2. String | 3. Boolean |
| -- | -- | -- |
| Handles Numbers | Consists of alphanumeric and/or other characters. | Handles **`true`** or **`false`** values. |
| E.g., `200.54` <br/> E.g., `893` | E.g., `'GA@ga.co'`  <br/> E.g., `"How are you, user?"` | E.g., `true` <br/> _E.g._: `false`  |
| Used for tasks that involve counting or calculating. | Used when working with any kind of text. Written with single or double quotes. |  Used when there are two options for a value (i.e., yes/no, on/off, true/false). |

We'll elaborate on all of these (except Booleans, for now).

### Strings

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text in JavaScript:

```JavaScript
"vanilla"
"Cherry Garcia"
"Rocky_Road_2"
```

### Numbers

Numbers can be divided into two groups:

**Integers (whole numbers)**

```
-1, 0, 2, 2358905, 100
```

**Floats (decimals)**

```
2.718, 3.14, .5, 0.25, .002381
```

Unlike some languages, JavaScript doesn't distinguish between `int` and `float`; every numeric variable is of `number` type. This means that JavaScript numbers can be positive, negative, or have a decimal point.

### Practice: Build Your Own Animal

Open up the Google Chrome console for this next part! Perform the following steps:

1. Declare a variable called `legs` with the value `4`. (Note: The console returns **undefined** when declaring a variable, because a variable declaration has no return type. This is the case for all declarations!)
1. Declare variables for the traits `color` and `sound` (using quotations for string values).
1. Update the value of each variable. To check the value of our variable, `legs`, simply type `legs` and press `enter`. Repeat this for the other two variables.

### Loosely Typed Language

Notice that, in JavaScript, you don't need to declare what type of data you're using. This makes it a **loosely typed** language.

For example, when you code...

```js
let a = 13;
let b = "thirteen";
```

...JavaScript will know that `a` is a number and `b` is a string, because strings always have quotation marks. Using quotation marks is a way of communicating with the processor about what type of data to expect.

By contrast, in Java, you do have to declare type of values when you code. It's a **strongly typed** language; one that requires you to _explicitly_ state the type of variable you're declaring:

```java
int a = 13;
string b = "thirteen"
```

While a loosely typed language reduces the amount of code you must write, it increases the possibility of type errors when a value is not of the expected data type. For example, if you put quotation marks around a number, such as `"9"`, the processor will read it as a string.

### `typeof`

When we start writing more complex code, there may be times when we forget which type of data we're manipulating. Luckily, the computer always knows which type of data we're working with, so we can use the `typeof` command to find out.

`typeof` returns a string that tells us which type of data we're seeing.

Take a look at some examples:

Make sure to remember the `typeof` command in case you ever need to find out the type of data with which you're working.

> **Fun fact**: You can use `typeof` with or without the parentheses!

### Independent Practice

Perform the following steps in the console. What does each return?

1. `typeof('hello');`
2. `typeof(24);`
3. `typeof(3.45);`
4. `typeof(true);`
5. `typeof("JavaScript is fun!");`
6. `typeof([1, 2, 3, 4, 5]);`
7. `typeof({animal: "dog", name: "spot"});`

<details>
<summary>Solutions</summary>

#### 1. `typeof('hello');`
> 'string'

#### 2. `typeof(24);`
> 'number'

#### 3. `typeof(3.45);`
> 'number'

#### 4. `typeof(true);`
> 'boolean'

#### 5. `typeof("JavaScript is fun!");`
> 'string'

#### 6. `typeof([1, 2, 3, 4, 5]);`
> 'object'

#### 7. `typeof({animal: "dog", name: "spot"});`
> 'object'

</details>

---

## Arithmetic Operators (20 min)

In this section, we'll talk about expressions.

> What are expressions? Watch this [video](https://generalassembly.wistia.com/medias/e1c21pib0n) to find out.

How do we combine numbers and operators to come up with more complex expressions in JavaScript? It's simple: We use arithmetic operators.

| | Operator | Example | Result |
| :--: | :--: | :--: | :--: |
| Addition | + |  2 + 4 | 6 |
| Subtraction | - | 8 - 1 | 7 |
| Multiplication | * | 2 * 3 | 6 |
| Division | / | 4 / 2 | 2 |
| Modulus | % | 4 % 2 | 0 |

All of the standard arithmetic operators we learned in grade school (addition, subtraction, division, and multiplication) are supported in JavaScript. These should look familiar. However, notice that multiplication is `*` and not `x`, and division is `/` instead of `&div;`.

If you don't have a background in programming, however, that last operator (the modulus operator) might be new.

The modulus operator shows the remainder of a division problem. It takes two numbers as inputs and returns what's left over from the division. For example, `9` divided by `4` equals `2` with a remainder of `1`.

### Modulus in Action

The modulus operator (`%`) is particularly useful in programming if we want to find out if a number is even or odd.

If we divide by `2` and have a remainder of `1`, we know the number is odd. If we have a remainder of `0`, we know that the number is even.

**Odd numbers:**

```javascript
5 % 2;
=> 1

7 % 2;
=> 1
```

**Even numbers:**

```javascript
4 % 2;
=> 0

2 % 2;
=> 0
```

This may seem tedious now, but it'll come in handy later on.

### Guided Exercise

Look at the following five problems. Using what you've learned about numbers and operators, write down the console returns for each:

1.  `1 + 2`
2.  `2 - 5`
3.  `5 / 2`
4.  `6 * 2`
5.  `10 % 4`


<details>
<summary>Answers:</summary>

1: 3
2: -3
3: 2.5
4: 12
5. 2

</details>

---

## String Concatenation and Coercion (15 min)

Now, let's see how you can use string values (textual information) in JavaScript.

When given string values, the `+` operator actually **concatenates**, or combines, two strings together to make one big string.

So, even though both `"4"` and `"3"` look like numbers to us humans, JavaScript sees that they're in quotation marks and therefore treats them as strings. Using the `+` operator to put the two strings together literally puts them next to each other, instead of evaluating their total.

![](./images/quotes_around_numbers.png)

Here's another example of concatenation. JavaScript glued the two strings together, but do you notice anything wrong?

![](./images/missing_space.png)

There's no space between the two words! To fix this, we'll have to add in the space ourselves. We can either insert it after the `"Almost"` string or before the `"Done"` string. Here, we added a space after `"Almost"`.

![](./images/added_space.png)

### The New Way

ES6 gives us a more elegant pattern for concatenation called _string interpolation_.

Rather than single quotes, we use backticks: \`\`. Here's what it looks like:

```javascript
let firstWord = 'hello'
let secondWord = 'world'

`${firstWord} ${secondWord}`
=> 'hello world'
```

### Exercise

Take a few minutes to concatenate strings in your console using both the `+` method and string templates, \`\`, as well as string interpolation, `${}`.

---

## Assignment Operators (15 min)

Now, let's get back to some math and look at assignment operators.

You're already familiar with the `=` assignment operator, but there are also ones we can combine with other operators to assign a new value to a variable.

|  | Initial Value | Operator | Example | Result |
|:--|:--:|:--:|:--:|:--:|
| Assign value to variable. | let num = 8; | = | num = 6; | 6 |
| Add value to variable. | let num = 8; | += | num += 6; | 14 |
| Subtract value from variable. | let num = 8; | -= | num -= 6; | 2 |
| Multiply variable by value. | let num = 8; |  `*=` | num `*=` 6; | 48 |
| Divide variable by value. | let num = 8; | /= | num /= 2; | 4 |

The `+=` operator adds a value to an existing variable; the `-=` operator subtracts a value from an existing variable.

There are also a couple of arithmetic operators we can use to add or subtract one from the value of a variable:

|  | Initial Value | Operator | Example | Result |
|:--|:--:|:--:|:--:|:--:|
| Add one to value of variable. | let num = 8; | ++ | num++; | 9 |
| Subtract one from value of variable. | let num = 8; | -- | num--; | 7 |

### Practice Time

#### 1.  Type `let num = 10;`.

#### 2.  Now, type `num += 4;`. What do you think the value of `num` will become?

#### 3.  Type `num -= 8;` in the console. Before you press `enter`, take a moment to think about what value the console will return.

<details>
<summary>Answers</summary>

1. The console returns `undefined` when declaring a variable using `let`, because the `let` statement returns no value.  
2. The console returns `14`, because our value was `10` and we added `4` to it.  
3. The console returns `6`, as the new value was `14` and we subtracted `8` from it.

</details>

---

## The Math Object (15 min)

Apart from simply adding and subtracting numbers from variables, JavaScript also allows you to use special code to perform other arithmetic operations on numbers, such as finding the square root.

### Research Time

Take five minutes to look at Mozilla's [math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and pick a function to quickly explain to the class. We'll popcorn around the room; each person will get 30 seconds to explain what their function is/does. Don't worry if you chose the same one as someone else. Repetition leads to retention!

### Math Functions Review

Here are some key math functions. Type the following code into the Chrome DevTools console:

*  Need to take a number to a specific power? Just use `Math.pow()`.

```javascript
// 3^2 becomes
Math.pow(3,2)
=> 9

// 2^4 becomes
Math.pow(2,4)
=> 16
```

* Taking a square root of a number? Use `Math.sqrt()`.

```javascript
// √(4) becomes
Math.sqrt(4)
=> 2
```

* Need a random number? Use `Math.random()` which returns decimal between 0 and 1.

```javascript
// The following only returns a random decimal.
Math.random()
=> .229375290430
/*
The following will return a
random number between 0 and 10.
*/
Math.random()*10

```

* Because numbers can be **floats** or **integers**, we often want to get rid of the remaining decimal places, which can be done using `Math.floor`.

```javascript
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3

```

While it may seem like we've covered a lot of math in this section, don't worry: You're not going to be doing any calculus in this course. When it comes down to it, computers operate on a pretty simple and straightforward logic, and there will be many times when you'll solve a problem by using one of these basic mathematical principles.

**Strange "gotchas" in JavaScript** Open your console and type in `2.1 + 1.3`. The result is...interesting. Read [this](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) if you want an incredibly boring and mathematically intense breakdown of why this is happening. [This site](https://floating-point-gui.de/) is dedicated to this problem, so if you're looking for how to avoid this problem, you can start here.

---

## Helper Methods (20 min)

### String Helper Methods

To find the length of a string, access its [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```javascript
'hello'.length;
=> 5
```

Strings have other [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) that allow you to manipulate the string and access information about the string:

```javascript
'hello'.charAt(0);
=> 'h'

'hello, world'.replace('hello', 'goodbye');
=> 'goodbye, world'

'hello'.toUpperCase();
=> 'HELLO'
```

### Converting Strings to Integers With `parseInt()` and `parseFloat()`

You can convert a string to an integer using the built-in [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function. This takes the base for the conversion as an optional second argument, which you should always provide:

```javascript
parseInt('123');
=> 123

parseInt('010', 10);
=> 10
```

This will be important later, when we're taking user input from the web or the command line and using it on our server or in our browser to do some type of numeric calculation.

Similarly, you can parse floating point numbers using the built-in [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function, which always uses base `10` (unlike its `parseInt()` cousin):

```javascript
parseFloat('11.2');
=> 11.2
```

You can also use the unary `+` operator to convert values to numbers:

```javascript
+'42';
=> 42
```

### Practice

Take two minutes to use `parseInt()` and `parseFloat()` in the console with some random numbers of your choosing.

### `NaN`

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However, the `+` operator simply converts the string to `NaN` if there is any invalid character in it.

[`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (short for "Not a Number") is returned if the string is non-numeric:

Username example:

```JavaScript
parseInt('colin1990');
=> NaN

parseInt('1990colin');
=> 1990
```

You can test for `NaN` using the built-in [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function:

```JavaScript
isNaN(NaN);
=> true
```

### `null` and `undefined`

JavaScript distinguishes between:

- `null`: A value that indicates a deliberate non-value.
- `undefined`: An uninitialized value; that is, a value hasn't even been assigned yet.

### Converting Numbers to Strings

* If you want to turn a number into a string, you can use a helpful method called `toString()`:

```javascript
(1).toString()
=> '1'
```

---

## JavaScript Best Practices (5 min)

A good habit to help you avoid coding headaches (in JavaScript or any other language): **Mind your syntax**.

Here are some syntax rules that are crucial to keep in mind.

### 1. Mind Your Cases

Always use camelCase to declare variables (or functions, as we'll see later) to prevent errors in your code and make it more readable.

### 2. End Statements With a Semicolon

`x = x + 1;`

After each line of code, be sure to use a semicolon. Some newer style guides advocate for omitting the semicolons, but for learning purposes, it's handy to include them until asked otherwise.

### 3. Be Careful With Quotations

Any time you have textual information, surround strings with quotation marks ( `'JavaScript is fun'`, `"O'Doyle rules!"` ).

We recommend picking one type of quotation marks (single or double) and sticking with those in your code, unless the situation dictates one or the other.

### 4. Comment Your Code

Developers often use comments to make notes for themselves and other developers. You can use a comment to add content that will be ignored by the machine but can be read by anyone looking through the code.

To add a comment, begin a line with two forward slashes `//`.

Example:

```js
let x = 10; // Declare variable x first,
let y = 5; // then declare y.
let z = x + y; // Add the two variables.
```

Multi-line comments can be written as such:

```js
/**
  This adds the two variables.
  It is a simple operation.
*/
let x = 10;
let y = 5;
let z = x + y;
```

----

## Conclusion (5 min)

- Describe use cases of different data types.
- What is the difference between `undefined` and `null`?

----

## Additional Resources

- [Mozilla on JavaScript Fundamentals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [JavaScript — A Misunderstood Language](http://javascript.crockford.com/javascript.html)
- [Eloquent JavaScript — Data Types](http://eloquentjavascript.net/01_values.html)
- [Eloquent JavaScript — Variables](http://eloquentjavascript.net/02_program_structure.html)
