# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Control Flow | Lesson | 1:30 | Sonyl Nagale (adapted from SEI) |

# Control Flow

## Learning Objectives

*After this lesson, students will be able to:*

- Differentiate between true, false, "truthy," and "falsey."
- Use if/else conditionals to control program flow based on Boolean conditions.
- Use switch conditionals to control program flow based on explicit conditions.
- Use comparison operators to evaluate and compare statements.
- Use Boolean logic (`!`, `&&`, `||`) to combine and manipulate conditionals.

### Student Preparation

*Before this lesson, students should already be able to:*

- Create variables in JavaScript.
- Use a text editor.

### Instructor Prep
*Before this lesson, instructors will need to:*
- Read through the lesson.
- Add additional instructor notes as needed.
- Edit language or examples to fit your ideas and teaching style.
- Open, read, run, and edit (optional) the starter and solution code to ensure that it's working and you agree with how the code was written.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 10 min  | Introduction | Conditional Statements |
| 5 min  | Demo | "Truthy" and "Falsey" |
| 10 min  | Demo | Boolean/Logical Operators |
| 5 min  | Demo  | Comparison Operators |
| 10 min | Demo | Equality Operators |
| 5 min | Demo | `switch` Statements |
| 10 min | Demo | `while` and `do-while` |
| 10 min | Demo | Iteration |
| 20 min | Demo | Fizz Buzz |
| 5 min  | Conclusion | Review/Recap |

---

## Conditional Statements (10 min)

Conditional statements are a way of essentially skipping over a block of code if it doesn't pass a Boolean expression. JavaScript supports two conditional statements: `if`...`else` and `switch`.

### `if...else` Statement

```js
if (expr) {
    /* code */
}
```

This means run the `code` block if `expr` is `true`.

```js
if (1 > 0) {
  console.log("hi");
}
//=> hi
```
Note that conditionals do _not_ terminate with a semicolon.

When you need to test more than one case, you may use `else if`:

```js
let name = "kittens";
if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name == "kittens!!"
//=> true
```

**Note**: It is recommended **to not** assign variables in the conditional expression, because the assignment of a value to a variable, like this...

```js
student = "Jamie";
//=> "Jamie"
```

...will return the value (as shown on the second line). If you assign a "truthy" value inside a conditional statement, then this condition will _always be true_ or, if you assign something undefined, it will make the conditional statement `false` (because undefined is "falsey"). Another potential issue with this is that it can be confused with equality (`==`). The example below is an illustration of what **not** to do, in general:

```js
// DO NOT DO THIS!
if (x = 3) {
    console.log("boo");
}
```

### Ternary Operator

JavaScript has a ternary operator for conditional expressions. You can think about the ternary operator as a concise "`if...else` in one line:"

```js
let age = 12;
//=> undefined

let allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```
---

## "Truthy" and "Falsey" (5 min)

### All of the following become `false` when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

### All other values become `true` when converted to a Boolean:

Do not confuse the primitive Boolean values `true` and `false` with the `true` and `false` values of the Boolean object. For example:

```javascript
let b = new Boolean(false);
if (b) {
  console.log("true")
}
//=> true
```

There is a simple way of verifying the "truthiness" or "falsiness" of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So, if you add two `!`, then you'll get the Boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

---

## Boolean/Logical Operators (10 min)

Logical operators will always return a Boolean value of `true` or `false`.

There are two "binary" operators that require two values:

- **`AND`**, denoted `&&`.
- **`OR`**, denoted `||`.

A third "unary" operator requires only one value:

* **`NOT`**, denoted `!`.

### `&&` (`AND`)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is `false`.

```javascript
true && false
//=> false

false && false
//=> false
```

### `||` (`OR`)

The `||` operator requires just one of the left or right values to be `true` in order to return `true`.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`.

The `!` takes a value and returns the opposite Boolean value, for example:

```js
!(true)
//=> false
```

The `&&` and `||` operators use short-circuit logic, which means whether or not they will execute their second operand is dependent on the first. This is useful for checking for `null` objects before accessing their attributes:

```js
let name = o && o.getName();
```

In this case, if the first operand `o` is `false`, then the second operand, `o.getName()`, will not be evaluated. The expression is basically saying: "We already know the whole `&&` expression is `false`, because `o` is 'falsey.' Why bother dealing with the second operand?"

That's efficient! We can use this behavior for preventing errors. For example, normally if `o` is undefined, then `o.getName()` would throw an error. However, because we know that `o.getName()` will only ever be checked if `o` is "truthy," we're safe to write the code this way.

We can also use similar behavior to set default values:

```js
let name = otherName || "Anonymous";
```

In this case, if the first operand, `otherName`, is `false`, then we'll see that the value `"Anonymous"` will be returned. If `otherName` is "truthy" (i.e., it contains a value), it will get returned and the second expression won't even be evaluated. The expression is basically saying: "We already know the whole `||` expression is `true`, because `otherName` is 'truthy.' Why bother dealing with the second operand?"

---

## Comparison Operators (5 min)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=`, and `>=`. These work for both strings and numbers. This is both useful and can be a source of frustration for some developers, as most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

---

## The Equality Operator `==` (10 min)

Equality is a bit more complex. There are two ways to verify equality in JavaScript.

When verifying equality using double equal `==`, JavaScript performs type coercion in the background. As we mentioned above, if the operands have different types (e.g., the number `1` and the string `"1"`), JavaScript will try to change the type of both operands to check if they are equal. This means that, a lot of times, expressions will return as equal more easily than if we were stricter about which things were equivalent.

For example:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

### The Equality Operator `===`

To avoid type coercion and measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we'll use this far more often when checking if two things are, in fact, the same.

> **Note:** "Sameness" and "equality" have various definitions and can be somewhat "fuzzy." They can also differ by programming language. Because you'll often be measuring if two things are equal, you should carefully investigate the way this works.

Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some cases when it doesn't do what we expect, such as when working with empty objects or arrays:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

#### Explanation

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values such as strings, numbers, and Booleans. Objects and arrays are complex collections of values and, when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types," while things such as strings and numbers are "value types."

What this means in practice is that, when we compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections; it only compares whether or not they are the **exact** same object in memory. In each of the cases above, when checking for equality, we're actually comparing the memory addresses of two objects. They're not exactly "the same."

### `!=` and `!==`

There are also `!=` and `!==` operators, which are the negated versions of `==` and `===`.

---

## `switch` Statements (5 min)

The `switch` statement can be used for multiple branches based on a number or string:

```javascript
let food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

> **Tip**: The default clause is optional, but it's good practice to always include it.

---

## `while` and `do-while` (10 min)

`while` is a loop statement that will run **while** a condition is `true`.

JavaScript has `while` loops and `do-while` loops. The first is good for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs:

```javascript
while (true) {
  // an infinite loop!
}
```

This should be enough to break a browser:

```javascript
let input = 0;
do {
  console.log(input++);
} while (input < 10);
```

---

## Iteration (10 min)

Iterating is a way of incrementally repeating a task.

### `for`

You can iterate over an array with:

```javascript
const a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(i);
}
```

This is slightly inefficient, as you are looking up the `.length` property once every loop. An improvement is to chain the `let` assignment:

```javascript
const a = [1, 2, 3, 4, 5];
for (let i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```

Notice the placement of the comma and semicolons.

### `forEach`

Another way of iterating over an array that was added with ES6 [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is:

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, arr) {
   console.log("I want a ", currentValue);
   console.log(arr[index]);
});
```

## FizzBuzz (20 min)

FizzBuzz is a game about division. Create a program that will iterate through numbers from one to 101 and log each number in the console.

- In the loop, every time a number is divisible by **three**, instead of logging the number itself, the word "fizz" should appear.
- If the number is divisible by **five**, the word "buzz" should be logged.
- If the number is divisible by both **three** and **five**, then the word "fizzbuzz" should be logged.

**Hint**: Go read about the [modulus operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) on MDN and figure out how to use it to simplify this problem.

A typical output in Chrome's DevTools would look like this:

![](./images/fizzbuzz.png)

<details>
    <summary>Solution</summary>

```javascript
for (let i = 1; i < 101; i++) {

  if((i % 3 === 0) && (i % 5 === 0)) {
    console.log("fizzbuzz");
  } else if(i % 3 === 0) {
    console.log("fizz");
  } else if(i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
```

</details>

## Conclusion (5 min)

These are some of the foundational tools you'll use in many of your applications. You'll probably need to refresh yourself on the exact syntax a few times before you memorize it, but it's important to be able to remember these core "control flow" concepts, because they'll come up in pretty much every programming language you'll ever encounter.

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
\
