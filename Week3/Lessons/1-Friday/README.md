| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Temperature | Lab / HW | 1:00 | Sonyl Nagale (adapted from SF-SEI) |

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Temperature Converter Lab

## Objective

Create a program that can convert a temperature in Fahrenheit, Celsius, or Kelvin to the other two units.

> Try the bonus goal if you have extra time!

## Set Up

- Create an `index.html` file.
- Create a `script.js` file.
- Make sure to link the script file in the `index.html`.

## Part 1

### Instructions

1. Set the `Fahrenheit` variable to the temperature you get from the user.
2. Below that, write JavaScript code that converts `Fahrenheit` to its equivalent Celsius and Kelvin values.
  - Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html).
  - Sample temperatures: `32F = 0C = 273.15K`.
3. Below that, `console.log()` the starting and converted temperatures.
4. Repeat Steps 1–3 for starting `Celsius` and `Kelvin` temperatures.
5. Test your program by opening `index.html` in the browser.

Your program will look something like this for each starting temperature:

```javascript
// Starting temperature
let fahrenheit = // Some code here to get user input;

// Conversion code
let fahrenheitToCelsius = ...;
let fahrenheitToKelvin = ...;

// Print to console
console.log( "Fahrenheit: " + ... );
console.log( "Celsius: " + ... );
console.log( "Kelvin: " + ... );
```

Your command line output will look something like this:

```
Fahrenheit: STARTING_TEMP F
Celsius: CONVERTED_TEMP C
Kelvin: CONVERTED_TEMP K
```

Feel free to turn to your tablemates for help!  

## Part 2 (Bonus — Advanced)

### Bonus No. 1

Use conditionals (e.g., `if...else` statement, `switch` statement) so that your program only prints out the converted temperatures for one starting value.  

The starting temperature should be determined by a `whichTemp` variable that you instantiate at the beginning of the program and will contain a value of either `f` (Fahrenheit), `c` (Celsius), or `k` (Kelvin).

### Bonus No. 2

Using conditionals, have your code accept either Fahrenheit, Celsius, or Kelvin and output the other two temperature types.

Restructure your program from Part 1 so that, when you convert a temperature, the new values are stored in an array. Your array will end up looking something like this:

`let fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];`

When you `console.log()` the temperatures, make sure you do so by accessing the values stored in the array.  

> For these bonus tasks, you'll need to look up and implement `for` or `while` loops.

### Bonus No. 3

Use a `for` or `while` loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log()` statements and remove strings.  

### Bonus No. 4

Using loops, create an interface that continues to ask the user for temperature conversions until the user requests a stop.
