# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Objects | Lesson | 1:30 | Sonyl Nagale (adapted from SEI) |

# Objects in JavaScript

## Objectives

*After this lesson, students will be able to:*

- Compare objects and key-value stores to arrays as data structures.
- Explain the difference between object properties and methods.
- Create empty objects and objects with multiple properties and methods using object literal syntax.
- Compare adding and retrieving properties to an existing object using the dot and bracket notations.
- Access properties of an object using keys and helper methods (`.hasOwnProperty`).
- Iterate over the keys of an object to return and manipulate values.

*Before this lesson, students should already be able to:*

- Create and manipulate variables with JavaScript.
- Use the Chrome Dev Tools console.

### Instructor Prep
*Before this lesson, instructors will need to:*
- Read through the lesson.
- Add additional instructor notes as needed.
- Edit language or examples to fit your ideas and teaching style.
- Open, read, run, and edit (optional) the starter and solution code to ensure that it's working and you agree with how the code was written.

### Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Introduction | What Is an Object? |
| 15 min  | Demo  | Creating Objects |
| 5 min  | Demo  | Object Properties |
| 10 min  | Demo  | Creating an Object With Properties |
| 10 min  | Demo  | Object Methods |
| 5 min  | Demo  | `this` for Object References |
| 5 min  | Demo  | Enumerating Properties of an Object |
| 5 min  | Demo  | Comparing Objects |
| 15 min  | Independent Practice | Monkeying Around |
| 5 min  | [Conclusion](#conclusion-5-mins)  | Review / Recap |

---

## What Is an Object? (5 min)

* Objects are a type of data structure that is nearly universal across programming languages (although they may have different names in different languages).
* As with arrays, objects can hold multiple pieces of data of varying types; unlike arrays, objects use named **keys** rather than **indices** to access those pieces of data.
* Objects in general are made up of two things: **properties** and **methods**. Properties are data attached to an object that describe it or relate to it in some way. Methods are functions, but because they're attached to an object, you can think of them as actions that the object can invoke on itself.
* In JavaScript, an object is a type of key-value store, or a way to group many pairs of keys and values together, so sometimes it's used like a hash (in Ruby) or a dictionary (in Python).

Example: A car has properties — a type of engine, a color, a certain number of seats, etc. Following the same logic, a JavaScript object may have **properties** and **values** for these properties.

Aside from the primitive types (`null`, `undefined`, string, number, and Boolean), **everything in JavaScript is an object**. In certain cases, primitives can _act_ as objects with our friend _type coercion_. Depending on how a primitive is initialized, it can act as an object; for example, you can call the `.length` property of a string, even though it's a primitive.

### Collections of Name-Value Pairs

JavaScript objects work as lists of keys (a property name) and corresponding values (a property value).

This way of storing/reading data is widely used across programs and languages because it's highly customizable and quick to implement.

A key can be a name, number, or string; the corresponding value to a key can be any data type of JavaScript, including arrays, `null`, or `undefined`... even another object. Object structures can therefore be nested (objects inside objects) and of any complexity.

---

## Creating Objects (15 min)

There are four different ways to create an object, but we'll focus on three:

### Object Literal Syntax

This is also called an [object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

```js
const myObject = {};
```

This is the most basic and straightforward way of creating an object. As with arrays, we use `const` to declare an object, not `let`, even though the values _inside_ it may change. When we work with JSON, as we will with APIs, this is the most common construction.


### Constructor Function

It's also possible to use a `function` statement to create an object that serves as a "constructor function."

The first step is to write a function that will define the object. By convention, we start the function name with a capital letter. Once the function is defined (in the current scope), you can create a new object by using the keyword `new`.

```js
function Classroom(name, numberOfStudents) {
  this.name = name;
  this.numberOfStudents = numberOfStudents;
}

const sei = new Classroom("SEI 4 London", 25);
```
This construction allows us to create _instances_ of an object from a given template. For example, with the code above, we could create a new classroom by saying:

```js
const jsr = new Classroom("JSR 5/2020", 15);
```

This gives us the ability to reuse our constructor (the function) and make more instances of the object without rewriting its contents. We can do this as many times as we want! Neat!

### `Object.create()`

It's also possible to use the [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) syntax.

This method can take an object in argument as the prototype, allowing you to create an object without having to use a constructor function:


```js
const Person = {
  type: "Human",
  displayType: function(){
    console.log(this.type);
  }
}

const person1 = Object.create(Person);
person1.displayType();
=> Human

const person2 = Object.create(Person);
person2.type = "Man";
person2.displayType();
=> Man
```

So, why would we use this construction? It's a combination of Method 1 (a normal object declaration) and using the more basic `Object.create()`. `Object.create()` is one of four ways to create an object, but its true power is **here**: Taking an existing object and making an instance of it. You could say:

```js
const myPerson = new Object();
```

But that just creates a new object without any key-value pairs. By implementing `Object.create()` with the **argument** of the object we're using as a template, we get an instance of the object, similar to using the constructor function.

The reasons for using each of these are nuanced, and the proper usage of each depends on the purpose of your program, where your data comes from, and your end goals. As with many parts of JavaScript, it can be open to interpretation.

---

## Object Properties (5 min)

Objects in JavaScript have associated properties.

You can think of a property on a JavaScript object as a type of variable that contains a value. The properties of an object can be accessed using **dot notation**:

```js
const Person = {
  name: "Glinda"
}

Person.name
=> "Glinda"
```

You can define or reassign a property by assigning it a value using `=`, as you would a normal variable:

```js
const Person = {
  name: "Glinda"
}

Person.name
=> "Glinda"

Person.name = "Elphaba"
Person.name
=> "Elphaba"
```

---

## Creating an Object With Properties (10 min)

We're going to create an object, `classroom`, that contains properties `name` and `campus`:

```js
const classroom = new Object();
=> undefined

classroom.name = "History 101";
=> "History 101"

classroom.campus = "London";
=> "London"

classroom
=> Object {name: "History 101", campus: "London"}
```

### Bracket Notation

There is another way to set properties on a JavaScript object:

```js
classroom["name"]   = "History 101";
classroom["campus"] = "London";
```

This syntax can also be used to read properties of an object:

```js
console.log(classroom["name"]);
=> "History 101";

const property = "campus";

console.log(classroom[property]);
=> "London";
```

This is important because, by using bracket notation, we can have a *variable* as a key name! For more details, see [MDN's documentation on property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

### Deleting Properties

If you want to delete a property of an object (and by extension, the value attached to the property), you need to use the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator.

The following code shows how to remove a property:

```js
const classroom = {name: "History 101", campus: "London", start: "1/1/2000"};
delete classroom.start;

classroom
=> {name: "History 101", campus: "London"}
```

---

## Object Methods (10 min)

As we've said previously, the value of a property can be anything in JavaScript, meaning we can also attach **functions** to an object's properties. When a function is attached to a property, this function becomes a **method**. Methods are defined in the exact same way as functions, except they have to be defined as the property of an object:

```js
const classroom = {
  name: "History 101",
  campus: "London",
  start: "1/1/2000",
  sayHello: function() {
    console.log("Hello");
  }
};
```

> Note: Sometimes you'll see the properties in an object written on different lines, and sometimes they will all be on the same line. Do what's best for readability, as JavaScript interprets them identically!

To call a method inside an object, we add parentheses to execute it:

```js
classroom.sayHello();
=> Hello
```

### Assigning a Previously Defined Function

We can attach regular functions to objects as methods, even after they are created:

```js
const helloFunction = function() {
  console.log("Hello");
}

classroom.sayHello = helloFunction;  

classroom.sayHello()
=> Hello
```

---

## `this` for Object References (5 min)

In JavaScript, **`this`** is a keyword that refers to the current object. By "current object," we mean the object that owns the code at which we're looking. In the example below, the `classroom` object is the _context_ for the code inside the `classInfo()` method. Therefore, when we refer to `this.name` in the code below, `this` refers to the `classroom` object, so `this.name` is `"History 101"`:


```js
const classroom = {
  name: "History 101",
  campus: "London",
  start: "1/1/2000",
  classInfo: function() {
    console.log(`This is ${this.name} and the class starts on ${this.start}`);
  }
};

classroom.classInfo()
=> "This is History 101 and it starts on 1/1/2000"
```

---

## Enumerating Properties of an Object (5 min)

There are three native ways to list the properties of an object:

* **for...in loops**: This method traverses all enumerable properties of an object and its prototype chain.
* **`Object.keys(o)`**:  This method returns an array with all of its own (i.e., not in the prototype chain) enumerable properties' names ("keys") of an object, `o`.
* **`Object.getOwnPropertyNames(o)`** This method returns an array containing all of its own properties' names (enumerable or not) of an object, `o`.

### For...In Loops

You can use the bracket notation with **for...in** to iterate over all the enumerable properties of an object:

```js
const myCar = {make: "Ford", model: "Mustang", year: 1969};

function showProps(obj) {
  let result = "";
  for (let key in obj) {
    result += key + " = " + obj[key] + "\n";
  }
  return result;
}

showProps(myCar);
=>
make = Ford
model = Mustang
year = 1969
```

> Note: That "\n" above means "newline." It's an indication to put a line break inside the string. That's why each key-value pair is printing on a different line!

For more details, check out [this section from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects#Objects_and_properties).

---

## Comparing Objects (5 min)

In JavaScript, if two objects are created separately, they are distinct, even if they are given the exact same properties. This is because objects are references to *memory addresses*, not actual values. Thus, it doesn't matter if the objects contain the same values, as they are in different locations. Consider it this way: Perhaps you can think of a common name, such as "Chris" or "Jennifer," but just because there are two people with the same name doesn't mean they are the same person:

```js
const student = {name: "Chris"};
=> undefined

const student2 = {name: "Chris"};
=> undefined

student == student2
=> false

student === student
=> true
```

If you're confused by the difference between `==` and `===`, review MDN's notes on [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()) and [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_()).

---

## Independent Exercise: Monkeying Around (15 min)

Create a `monkey` object, that has the following properties:

- `name`
- `species`
- `foodsEaten`

And the following methods:

- `eatSomething(foodString)`
- `introduce`: Produces a string introducing itself, including its name, species, and what it has eaten.

Then, use the `monkey` object you created to do the following:

- Create three `monkey`s total. Make sure all three `monkey`s have all properties set and methods defined.
- Exercise your `monkey`s by retrieving their properties and using their methods using a for...in loop.

> Note: Make sure to practice using both syntaxes for retrieving properties (dot notation and brackets)!

---

## Conclusion (5 min)

We'll use objects in JavaScript every day, and you'll have plenty of time to practice creating and using objects in JavaScript. There are a lot of resources available on the web for you to dive deeper, but the most detailed and understandable one is probably MDN.

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Intro to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Objects in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
