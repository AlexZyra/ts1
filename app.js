"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
const readOnlyObj = {
    a: 123,
    c: {
        x: true,
        y: [1, 2, 3],
        z: null
    },
};
const deepRequireOnlyObj = {
    a: 123,
    c: {
        x: true,
        y: [1, 2, 3],
        z: null
    },
};
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["Key1"] = 0] = "Key1";
    MyEnum[MyEnum["Key2"] = 1] = "Key2";
    MyEnum[MyEnum["Key3"] = 2] = "Key3";
})(MyEnum || (MyEnum = {}));
const obj = {
    property1: 42,
    property2: 'Hello',
};
const propertyDescriptorObj = {
    property1: {
        value: 42,
        writable: true
    },
    property2: {
        value: 'Hello',
        writable: true
    }
};
function exampleFunction(param) { }
const param1 = 17;
// exampleFunction(param1)
const param2 = 'ts';
// exampleFunction(param2)
