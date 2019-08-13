function maxOfTwoNumbers(x, y) {
    if (x > y) {
        return x;
    }

    return y;
}

function maxOfTwoNumbersTernary(x, y) {
    return x > y ? x : y;
}

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    }

    if (y > x && y > z) {
        return y;
    }

    return z;
}

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function isCharacterAVowel(x) {
    if (vowels.includes(x.toLowerCase())) {
        return true;
    }

    return false;
}

function sumArray(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}

function multiplyArray(x) {
    let mult = 0;

    for (let i = 0; i < x.length; i++) {
        mult *= x[i];
    }

    return mult;
}

function numberOfArguments() {
    return arguments.length;
}

function reverseString(x) {
    let reverse = '';

    for (var i = x.length - 1; i >= 0; i--) {
        reverse += x[i];
    }

  return reverse;
}

function altReverseString(x) {
    return x.split('').reverse().join('');
}

function findLongestWord(x) {
    let longest = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i].length > longest.length) {
            longest = x[i]
        }
    }

    return longest;
}

function filterLongWords(x, num) {
    let longWords;

    for (let i = 0; i < x.length; i++) {
        if (x[i].length > num) {
            longWords.push(x[i]);
        }
    }

    return longWords;
}

function filterLongWordsBonus(x, num) {
    const longWords = x.filter((word) => {
        if (word.length > num) {
            return word;
        }
    })

    return longWords;
}

function charactersOccurancesCount(x) {
    x = x.toLowerCase();
    let chars = {};

    for (let i = 0; i < x.length; i++) {
        chars[x.charAt(i)] = i;
    }

    return chars;
}
