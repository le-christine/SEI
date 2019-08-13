![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Arrays | Lesson | 1:30 | Sonyl Nagale (adapted from SEI-Connected Classroom) |


# Arrays

## Lesson Objectives

_After this lesson, students will be able to:_

- Declare an empty array.
- Access and change array elements.
- Use expressions with the square brackets to access elements.
- Add and remove elements from an array.
- Use at least six array methods and research more methods independently.
- Access elements in a multidimensional array.

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Read through the lesson
- Add additional instructor notes as needed
- Edit language or examples to fit your ideas and teaching style
- Open, read, run, and edit (optional) the starter and solution code to ensure it's working and that you agree with how the code was written

### LESSON GUIDE

| TIMING  | TYPE  | TOPIC  |
|:-:|---|---|
| 5 min  | Intro  | What is an Array |
| 5 min  | Guided Practice | Arrays |
| 10 min  | Demo  | Accessing Elements in Arrays |
| 10 min | Independent Practice | Accessing Elements in Arrays |
| 5 min  | Demo | Changing Elements |
| 10 min  | Independent Practice  | Changing Elements |
| 10 min  | Demo  | Array Methods: Adding and Removing Elements |
| 10 min  | Demo | Research Array Methods |
| 10 min  | Practice in Pairs | Research Array Methods |
| 5 min   | Demo | Multi-Dimensional Arrays |
| 5 min   | Independent Practice | Multi-Dimensional Arrays |
| 5 min  | Conclusion | Review / Recap |

---

## What Is an Array? (5 min)

In the last lesson, we declared a variable, `name`, and set its value to `"Santa"`. That's all well and good for one name, but what should we use if we wanted to store the names of all Santa's reindeer?

We can use an array! An array is like a list of items. Typically, the array items are all the same type, but in JavaScript, they don't actually have to be. All items go between square brackets:

```js
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

**Quick Facts:**

- Arrays contain `elements` separated by commas (`,`).
- `Elements` can be any data type.
  - Usually, all elements in an array are of the same data type.
- Declare an empty array like this: `const array = [];`.

---
## Guided Practice (5 min)

* Make an empty array called `myArray`.
* Create another array, `faveFoods`, that contains a list of your three favorite foods.
* `console.log()` the array of your favorite foods.

What happens when you print out `myArray`? Was it what you expected?

---

## Accessing Elements in Arrays (10 min)

Each element in the array has a numbered _index_. The first element has an index of `0`.

* Access elements by putting the _index number_ in square brackets.

Access the first element in an array:

```js
const items = ["chair", "table", "candle", "map"];

console.log(items[0]);
=> "chair"
```

Access the second element in an array:

```js
const items = ["chair", "table", "candle", "map"];

console.log(items[1]);
=> "table";
```

---

**`.length` method**

We can use the `.length` method to find out the number of elements in an array.

```js
console.log(items.length);
=> 4
```

**Ask**

`.length` gives us the number `4`, but is there an element in the `items` array with index position of `4`?

### Using Expressions to Access Elements

We can put an _expression_ between the square brackets to access array elements:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[2 * 2];
=> "magnifying glass"

```

In an array with an **even** number of elements, we could find the element that comes right after the middle:

```js
const list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];

list[list.length / 2];
=> "map"

```

To access the last array element:

```js
const items = ["chair", "table", "candle", "map"];

items[items.length - 1];
=> "map";
```

We can also use variables in our square brackets, as long as the variable references a whole number:

```js
const sheep = ['Merino', 'Romney', 'Faulkand'];
const num = 1 + 1;

console.log(sheep[num]);
=> "Faulkland"
```

### Let's Practice: Your Turn! (10 min)

```js
const ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];
```

* `console.log()` the first element in the array.
* `console.log()` the third element in the array.
* `console.log()` the last element in the array.
* `console.log()` the length of the array.

---

## Changing Elements (5 min)

* To change an element in an array, first access the element and then assign a new value:

```js
const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
```

```js
veggies[1] = "spinach";
=> "spinach"
```

```js
console.log(veggies);
=> ["red pepper", "spinach", "pumpkin", "cauliflower"]
```

---

### Let's Practice (10 min)

* With the following array:

```js
const numbers = [21, 18, 5, 3, 2, 1, 1];
```

* Change the third element of the array to `null`, and `console.log()` the array to confirm. (The third element is the number `5`.)


**Figure It Out**

* Change the first element of the array to equal **itself** times 10 using the compound operator `*=`.

* Why wouldn't `nums[0 * 10]` work for this purpose?

---

## Array Methods: Adding and Removing Elements (10 min)

### Adding with `.push()`

We can conveniently add data to end of the array using the `.push()` method. `.push()` adds an element to the *end* of the array. Try this out in your Chrome console:

```js
const beatles = ["George", "John", "Ringo"];
```

```js
beatles.push("Paul");
```

```js
beatles;
=> ["George", "John", "Ringo", "Paul"]
```

### Adding with `.unshift()`

The `unshift()` method works just like the `push()` method, except that it adds the element to the *front* of the array instead of the end. Try this out in your Chrome console:

```js
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
```

```js
reindeer.push("Rudolph");
```

```js
reindeer;
=> ["Rudolph", "Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
```

### Removing with `.pop()`

You can think of the `pop()` method as the opposite of the `push()` method: `push()` adds to the end of an array, whereas `pop()` removes from the end of an array. Conveniently, `pop()` also returns the element that was popped off.

```js
reindeer.pop();
=> "Blitzen"
```

```js
reindeer;
=> ["Rudolph", "Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner"]
```

### Removing with `shift()`

The `shift()` method works just like the `pop()` method, but instead of removing from the back of the array, it removes from the *front*!

---

## Research Array Methods (10 min)

There are many built-in methods for arrays. They can do things such as reversing, sorting, searching, and altering the contents. Let's use this array to explore the following methods:

```js
const fruit = ["apple", "oranges", "banana", "grapes", "cherries", "blueberries", "kiwi"];
```

* What does the array method `indexOf` do? How is it used? What does it return?
* What does the array method `reverse` do? How is it used? What does it return?
* What does the array method `sort` do? How is it used? What does it return?

Try the following out in your console:

```js
const fruit = ["apple", "oranges", "banana", "grapes", "cherries", "blueberries", "kiwi"];
```

```js
fruit.sort();
=> ["apple", "banana", "blueberries", "cherries", "grapes", "kiwi", "oranges"]
```

```js
fruit;
=> ["apple", "oranges", "banana", "grapes", "cherries", "blueberries", "kiwi"]
```

**Wait, What Happened to Our Sorted Array?**

Some methods are *mutator* methods, meaning that they actually change the array simply by being called. `push()` and `pop()` are mutator methods, but `sort()` and `reverse()` are not! Instead, they actually *return* the altered version of the array while leaving the original untouched!

---

### Let's Practice (Pairs) (10 min)

 - Make an array that contains two of your favorite TV shows or movies.
 - `.push()` another TV show or movie into the array.
 - Save a `.sort()`ed version of the array to another variable, and `console.log()` the new array.
 - `.push()` another TV show or movie into the sorted array.
 - Use `.reverse()` method to reverse the order of the array.
 - Save a `.reverse()`ed version of the array to another variable, and `console.log()` the reversed result.
 - Research the array methods `.slice()` and `.splice()`. What do they do? How do they differ? Which one is a mutator method?
 - The `splice()` method can be used to add OR remove array elements in the middle of the array. Make an example of both!

---

## Multi-Dimensional Arrays (5 min)

Array elements can be other arrays:

```js
const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
```

The `pairs` array has **two** elements. Use `pairs.length` to verify:

- The element at `0` is `["Snoopy", "Linus"]`.
- The element at `1` is `["Peppermint Patty", "Woodstock"]`.

We can go deeper to retrieve the elements of these inner arrays. To do this, we keep adding square access brackets. To get `Peppermint Patty` from the `pairs` array, for example:

```js
pairs[1][0]
```

Multi-dimensional arrays are useful for nested information and grid layouts. Sometimes, you will see them written out like this for visualization:

```js
const grid = [
             [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8]
            ];
```

Changing elements in a multi-dimensional array is the same process as with a regular array, just with one extra set of brackets:

```js
const confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg"]];

confectionary[1][0] = "musketeer";

confectionary;
=> [["mounds", "almond joy"], ["musketeer", "easter egg"]]
```

---

### Let's Practice (5 min)

Consider the following multi-dimensional array:

```js
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", "Baked Goods", "Waldo"]];
```

* What would you write to access `"Waldo"`?
* What would you write to access `"Jacc"`?
* Change `"Baked Goods"` to `"No One"`.
* Use the `.splice()` method and remove `"Eggbert"`.


## Summary (5 min)

We often need to store multiple related items as a single unit, which is why arrays are so heavily used in JavaScript. As a programmer, knowing how to manipulate the data in an array (adding, changing, deleting, and more) will eventually become second nature. Keep practicing until you've got using arrays and array methods down pat!
