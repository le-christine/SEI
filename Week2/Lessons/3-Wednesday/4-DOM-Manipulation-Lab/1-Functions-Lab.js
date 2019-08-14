/* ============ BEFORE YOU GET STARTED ============ */

/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert('Hello!');
}

/* Here's the steps to test it:
- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!
*/

/* ================= AS YOU COMPLETE EACH STEP ============= */

/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!!
*/

/*REMINDER - ANY QUESTION THAT DOES NOT SPECIFICALLY TELL YOU TO ALERT OR PROMPT SHOULD BE LOGGED TO THE CONSOLE*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!
function justDoIt(name) {
    return `${name}, JUST DO IT!`;
}


// PART 1: Big or Small String?
function bigOrSmallString(word) {
    return word.length > 10
        ? 'This word is looooooong'
        : 'This word is short 😬';
}


// PART 2: Odd or Even String Length?
function oddOrEvenString(word) {
    return word.length % 2 === 0
        ? "This string's length is TOTALLY even!"
        : "This string's length is odd.";
}

// PART 3: Median
function medianOfArray(arr) {
    arr = arr.sort();
    console.log(arr);
    return arr[Math.ceil(arr.length / 2)]
}


// PART 4: Sum Array
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// PART 5: Vowel Count
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function vowelCount(str) {
    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            vowelCount++;
        }
    }

    return vowelCount;
}


// PART 6: Initials
function initials(str) {
    const nameStr = str.split(" ");
    let initials = nameStr[0].charAt(0) + nameStr[1].charAt(0);
    if (nameStr[2]) {
        initials += nameStr[2].charAt(0);
    }

    return initials;
}


// BONUS: Days of the week
let day = window.prompt("What day of the week is it?", "Monday");
day = day.toLowerCase();
switch (day) {
    case 'monday':
        window.alert("Energize");
        break;
    case 'tuesday':
        window.alert("Just getting started!");
        break;
    case 'wednesday':
        window.alert("Hump Hump!");
        break;
    case 'thursday':
        window.alert("Almost there!");
        break;
    case 'friday':
    case 'saturday':
    case 'sunday':
        window.alert("Weeeeeee!");
        break;
    default:
        window.alert("Huh, sorry didn't get that?");
}


// BONUS: Let's take the Subway
let train = window.prompt("The (L) Train, the (N) Train, the (S)ix Train?");
train = train.toLowerCase();
switch (train) {
    case 'l':
        window.alert('8th ave 6th ave union square....');
        break;
    case 'n':
        window.alert('Times Square Herald Square 28th st....');
        break;
    case 's':
        window.alert('Grand Central 33rd st 28th st....');
        break;
    default:
        window.alert('huh...?');
}

window.alert('Thanks!');


// BONUS: Truth - y & False -y Checker
const arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];

function truthyFalsey(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i] ? 'truthy' : 'falsey');
    }
}



// BONUS: Double X Counter
function countXx(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === 'x' && str[i + 1] === 'x') {
            count++;
        }
    }

    console.log(count);
}




/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');
