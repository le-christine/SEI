---
title: Intro to Recursion
type: Morning Exercise
duration: "1:00"
creator:
    name: Steve Geluso
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Recursion

## Introduction

Today we're going to explore a topic called **recursion**. According to Wikipedia, recursion is "the process of repeating items in a self-similar way." In programming recursion basically means, "a function that calls itself."

Here's some pictures that we could say are **recursive** and exhibit properties of **recursion**:

![Mona Lisa holding her own painting](./assets/recursion_mona_lisa.jpg)
![Hulk Hogan's beard growing his own face](./assets/recursion_hulk_hogan.jpg)
![Droste branding](./assets/recursion_droste.jpg)

### Joke Dictionary Definition

**Recursion:** see definition of recursion. (Get it...)

----

## Let's Pretend We Are A Recursive Function

How can we count how many people are sitting directly behind one person in this classroom?

The teacher stands at the front of the room and asks someone how many people are behind them. That person can do two things:

1. They can say there's no one sitting behind them
2. They can ask the person behind and add one to their answer

Now let's try it. Don't turn around and look at who all is behind you! You can only communicate with the person who asked you the question, and the person directly behind you.

This is an example of recursive programming. We could write our instructions as a function called `count` that calls itself:

```java
public static int count(Person person) {
  Person otherPerson = person.getPersonBehindMe();
  if (otherPerson == null) {
    return 0;
  } else {
    return 1 + count(otherPerson);
  }
}
```

Recursion allows us to write extremely expressive code! We can write a very small amount of code and have it perform extremely powerful computations.

----

## A Useless Recursive Function

We know that functions can call other functions. It's not so obvious that functions can actually call themselves too. Let's look at one function that calls itself and consider what it does.

* What will be the output of this function?
* When will this program stop running?

```java
public static vod main(String[] args) {
  // call the function
  navelGazer();
}

// define the function
public static void navelGazer() {
  System.out.println("hmm...");

  // make a recursive call to the function
  navelGazer();
}
```

This function will theoretically print out "hmm..." forever. It will never stop running. It will keep calling itself forever and ever.

In practice, the function will eventually crash. Your computer will run out of memory and you'll see an error message saying something like, "stack overflow exception" or "maximum call stack exceeded."

This function is only here to prove that it's possible to call a function from inside itself, and to show the danger of a function that calls itself forver.

Recursion gets much better than this useless example. It's possible to write recursive functions in such a way that we can write very robust, expressive code.

Let's look at more recursive functions and see what techniques we can use to make sure our programs do useful things and don't simply call themselves forever.

------

## Base Cases and Recursive Cases

Recursive functions are comprised of the following components:

* the **base case**
* the **recursive case**

Recursive functions usually follow this pattern. They detect and handle the base case first, otherwise they perform one small piece of the problem and then recurse:

```java
public static void recursionCount(int n) {
  // check for base case
  if (n <= 0) {
    return 0;
  } else {
    // otherwise do a small amount of work and call the function again
    return 1 + recursionCount(n - 1);
  }
}
```

### Base Cases

The base case is the simple case. It's the case when the algorithm doesn't call itself. These cases are often deceivingly simple! Think of them as writing what the program should return for the most obvious of examples.

If you're writing a function that computes the sum of numbers in a list the base case is probably:

```java
if (list.length === 0) {
  return 0;
}
```

Writing one or more base cases that define the answer for the simplest part of the problem will prevent your program from calling itself indefinitely.

### Recursive Cases

The recursive case is the case when the function performs one small part of the problem and calls itslf recursively to solve the next small part of the problem.

- How would someone describe the base case of the people counting problem?
- Can someone else describe the recursive case of the people counting problem?

----

## Guided Practice Problems

Let's solve a few problems together. Be sure to identify the base case and the recursive case for each function!

### Sum Problem Practice

Let's write a function called `sum` that accepts a number `N` and computes the sum of numbers from 0 to N.

What is the base case?

```java
if (n < 0) {
  return 0;
}
```

What is the recursive case?

```java
if (n > 0) {
  // man, I wish we had a function that computed the sum of 0..N-1
  return n + ???
}
```

Oh wait!! We've already defined a function that sums all numbers! Take a step and take the leap of faith. Call the function again!

```java
public static int sum(int n) {
  if (n < 0) {
    return 0;
  } else {
    n + sum(n - 1);
  }
}
```

Wait, this doesn't work. Remember to `return` the value that comes back from the recursive call.

```java
public static int sum(int n) {
  if (n < 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}
```

### Palindrome Practice Problem

Detecting whether a string is a palindrome is an excellent example of a problem that turns out to be extremely elegant when written recursively.

What is a palindrome? A palindrome is a string that is spelled the same backwards and forwards.

Put another way, a palindrome is a string where the first letter is equal to the last letter, and the second letter is equal to the second to last letter and so on and so forth. An empty string is considered a palindrome. A one letter string is also considered a palindrome.

Write a function called `isPalindrome` that accepts a string and returns `true` if the string is a palindrome, and returns `false` if the string is not.

What are our base case(s)?

* Return true if the string is empty.
* Return true if the string is of length 1

What is our recursive case?

* compare the first and last letter:
  * if they are equal then recurse on the remaining parts of the string
  * if they are different then return false

Remember your return statements! The final solution should bubble up from
the deeper recursive calls!

isPalindrome("") // true
isPalindrome("a") // true
isPalindrome("ab") // false
isPalindrome("abba") // true
isPalindrome("catdog") // false
isPalindrome("tacocat") // true

#### Call Stack Visualization

Here's a visualization of what's happening as functions are called when running the `isPalindrome` function on the string `"civic"`.

You can see the algorithm splitting off the C's on each end and recursing on the String `"ivi"`. It recurses again down to just the String `"v"`. Single-character Strings are a base case. The algorithm hits the base case and returns `true`. We can see `true` return from each function until it returns all the way to the top of the first function call.

![call stack visualization of palindrome](assets/call-stack-palindrome.png)

```java
public static boolean isPalindrome(String ss) {
  // Base case: empty Strings and single-characters are considered palindromes.
  if (ss.length() < 2) {
    return true;
  } else {
    // get the first and last letters
    char first = ss.charAt(0)
    char last = ss.charAt(ss.length() - 1);

    // compare the first and last letters.
    if (first != last) {
      return false;
    } else {
      // get the middle of the string
      String middle = ss.substring(1, ss.length() - 2);
      return isPalindrome(middle);
    }
  }
}
```
