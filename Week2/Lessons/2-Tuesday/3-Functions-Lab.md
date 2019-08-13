# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions Lab

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Objects | Lesson | 1:30 | Sonyl Nagale (adapted from SEI) |

## Introduction

> Note: This can be a pair programming activity or done independently.

Let's practice writing some functions!

## Exercise Requirements

> Tip: If you're going through the below code and you forgot how to do something, try Googling it. [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is also a great place to start!

Follow the requirements in the list below. Portions marked as "Extra Challenge" are not required, but you should attempt them if you have time.

1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. You can use the if-else conditional statement available in Javascript.
    * **Extra Challenge**: Try solving this function in a single line of code with a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).
1. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
1. Write a function `isCharacterAVowel` that takes a character (_i.e._ a string of length 1) and returns `true` if it is a vowel and `false`, otherwise.
1. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
1. Write a function called `numberOfArguments` that returns the number of arguments passed to the function when called.
1. Define a function `reverseString` that reverses a string. For example, reverseString("happy birthday") should return the string "yadhtrib yppah".
    * **Extra Challenge:** do not use the built-in `reverse()` function. Try solving this one with loops! Call this one `altReverseString`.
1. Write a function `findLongestWord` that takes an array of words and returns the length of the longest word in the array.
1. Write a function `filterLongWords` that takes an array of words and a number `i` and returns a new array of words that are longer than `i` characters long.
    * **Extra Challenge**: Try using the built-in array method `filter()` for this one.


**Bonus**

1. Write a function called `charactersOccurencesCount` that takes a string as an argument and returns an object where:

  - the keys are the characters that occur in the string
  - the values are the number of occurrences for each letter, regardless of the case
    * **Hint:** use the `toLowerCase()` string function

For example, calling the function with the string "General Assembly" will return:

```javascript
{
  "a": 2,
  "b": 1,
  "e": 3,
  "g": 1,
  "l": 2,
  "m": 1,
  "n": 1,
  "r": 1,
  "s": 2,
  "y": 1
}
```

> Note: JavaScript objects don't have dependable order, so your results may vary in the ordering, but should contain all the same values!

## Starter Code

Open the file `3-Functions.js` - all the function names are already inside the file. You just need to implement the functions by adding code inside each one.

Use the Chrome dev tools console to practice executing your code.

## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
