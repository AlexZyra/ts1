"use strict";
let firstWord = "Hello World on TS";
console.log(firstWord);
// var result1: unknown = prompt("Enter the first number");
// var result2: unknown = prompt("Enter the first number");
// alert(result1);
const array = [1, 2, 3];
console.log(typeof (array));
var Count;
(function (Count) {
    Count[Count["One"] = 1] = "One";
    Count[Count["Two"] = 1] = "Two";
})(Count || (Count = {}));
console.log(Count[1]);
