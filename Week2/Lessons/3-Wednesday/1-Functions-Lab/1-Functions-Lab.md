
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Functions | Lab | 1:00 | Rachel Moskowitz (adapted from SEI) |


# Functions Morning Exercise

#### WRITE ALL YOUR ANSWERS IN `starter.js` file. Test early, test often! Remember, you can use node for that by typing `node starter.js` in your terminal.

#### But, you'll have to run this script in a web browser for some of the later questions since they ask you to use alerts and prompts. Instructions on how to do this are in `starter.js`.

### PART 0: Just DO it!!
Write a function `justDoIt` that accepts a string, your name, as an argument. The function should **return** a string that has your argument and the phrase "JUST DO IT".

```javascript
//example usage
justDoIt('Zack');
// => "Zack, JUST DO IT!";
```

### PART 1: Big or Small String?

#### You may have to dig into some documentation for some of these!

Write a **function** called `bigOrSmallString` that accepts one argument, a string, and returns "This word is loooooong!" if the string's length is greater than 10, and "This word is short 😬" otherwise.

### PART 2: Odd or Even String Length?
Write a **function** called `oddOrEvenString` that accepts one argument, a string, and **returns**
*"This string's length is odd.."* if the length is an odd number, and *"This string length is TOTALLY even!"* if the string length is even.

### PART 3: Median
Write a **function** called `medianOfArray` that takes an **array** as an argument.
The function should **return** the *median* number in an array.
Hmmmm, haven't you found a median of the array before? Maybe not..
> *Hint*: Use some kind of sorting method to put the values in order first, then somehow access the median element, somehow using the length of the array....maybe? We're going to go over arrays in depth on Monday but see if you can find some Array methods that can accomplish what you need.

### PART 4: Sum Array

Create a **function** called `sumArray` that takes an array `arr` as an argument and **returns the sum** of all the numbers in the array. If the array is empty then return 0.

### PART 5: Vowel Count
Create a **function** called `vowelCount` that accepts a `str` as an argument and **returns** the number of vowels in that string.

### PART 6: Initials
Write a function called `initials` that accepts one argument (person's name) and returns their initials.
  - It should work both with and without middle name being provided.

> Hint! Remember, string methods? Use them!

```javascript
initials('Neil Patrick Harris');
// NPH
```


## BONUSES!!

###  Days of the week
Write a **switch** JavaScript **statement** that prompts the user to specify what day is today. :date:
> How do you create a prompt popup in the browser? Google might know 🙃

- If it's Monday alert "Energize!"
- If it's Tuesday alert "Just getting started!"
- If it's Wednesday alert "Hump Hump!"
- If it's Thursday alert "Almost there!"
- If it's Friday, Saturday or Sunday alert "Weeeeeee!"
- If it's not anything above alert "Huh, sorry didn't get that?"

###  Let's take the Subway
Let's take the Subway. Write out  JavaScript that would do the following :station:

> Hint: maybe you need a switch statement, maybe you need a function? You choose 😉

When the script is run, a menu should be prompted displaying:
  - A list of three trains - `The (L) Train, The (N) Train, The (S)ix Train`
  - And asking the user to make their selection!

THEN:
  - If the user enters: `L`
      - An **alert** should output a message containing the user's selection labeled as `L train` and display the following stops:
        - `8th Ave`
        - `6th Ave`
        - `Union Square`
        - `3rd Ave`
        - `1st Ave`
        - `Bedford Ave`
    - If the user enters: `N`
      - An **alert** should output a message containing the user's selection labeled as `N train` and display the following stops:
        - `Times Square`
        - `Herald Square`
        - `28th St`
        - `23rd St - DAPS Nexus`
        - `Union Square`
        - `8th St `
    - If the user enters `S`
      - An **alert** should output a message containing the user's selection labeled as `S train` and display the following stops:
        - `Grand Central`
        - `33rd St`
        - `28th St`
        - `23rd St`
        - `Union Square`
        - `Astor Place`

- Finally, a `Thank You` message should alert.
- The program then exits.

###  Truth - y & False -y Checker
Create a **function** `truthyFalsey`that accepts an array as an argument `arr` (provided in the starter folder), goes through it, and **console logs** whether it's a truth-y or false-y value

###  Double X Counter
Write a **function** called `countXx`. Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

```javascript
  countXx('abcxx')
  // 1
  countXx('xxx')
  // 2
  countXx('xxxx')
  // 3
```

``
