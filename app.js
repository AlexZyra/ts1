"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
const A = {
    key: '2',
    123: 45,
    key1: 67
};
const B = {
    sum: (a, b) => a + b,
    greet: (name) => `Hello, ${name}!`
};
const myArrayLikeObject = {
    0: 'Its',
    1: 'written',
    2: 'on',
    3: 'TypeScript',
    length: 4
};
const dude = {
    name: "Alex",
    city: 'Dnipro',
    course: 2,
    learns: true
};
const person = {
    name: "Alex",
    age: 18
};
function areAllValuesNumbers(obj) {
    for (const key in obj) {
        if (typeof obj[key] !== "number") {
            return false;
        }
    }
    return true;
}
const obj1 = { key1: 1, key2: 1.5, key3: "string" };
const obj2 = { key1: 1, key2: 1.5, key3: 23521 };
console.log(areAllValuesNumbers(obj1));
console.log(areAllValuesNumbers(obj2));
