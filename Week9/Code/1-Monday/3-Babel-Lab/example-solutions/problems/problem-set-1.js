// Using arrow function format, write a function that will log 'Hello Babel!'

const func = () => console.log('Hello Babel!');

// Using a string template, write a function that accepts a string, `name`, as an argument and logs 'Hello [name]!'

const greet = (name) => console.log(`Hello ${name}`);

// Using spread syntax, write a function that takes two objects as arguments and returns a new object combining all the key-value pairs from each object. If the two arguments have matching keys, the key-value pairs from the first object should overwrite those of the second

const blend = (obj1, obj2) => ({ ...obj2, ...obj1 });
