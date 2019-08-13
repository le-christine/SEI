const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch","Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

for (let i = 0; i < drSeuss.length; i++) {
    console.log(drSeuss[i]);
}

for (let i = 0; i < drSeuss.length; i += 2) {
    console.log(drSeuss[i]);
}

for (let i = 0; i < drSeuss.length; i += 2) {
    console.log(i);
    console.log(drSeuss[i]);
}

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

for (let i = 0; i < looneyTunesChars.length; i++) {
    if (i % 2 === 0) {
        console.log(looneyTunesChars[i]);
    }
}

for (let i = 0; i < looneyTunesChars.length; i++) {
    if ((i % 2 === 0) || (i === 3)) {
        console.log(looneyTunesChars[i]);
    }
}

for (let i = 0; i < looneyTunesChars.length; i++) {
    if (i % 2 !== 0) {
        console.log(looneyTunesChars[i]);
    }
}
