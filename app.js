"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class Shape {
}
class Circle extends Shape {
    constructor(name, color, radius) {
        super();
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(name, color, width, height) {
        super();
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    print() {
        console.log(`Area of ${this.name} = ${this.width} * ${this.height}`);
    }
}
class Square extends Shape {
    constructor(name, color, width) {
        super();
        this.name = name;
        this.color = color;
        this.width = width;
    }
    calculateArea() {
        return this.width * this.width;
    }
    print() {
        console.log(`Area of ${this.name} = ${this.width} * ${this.width}`);
    }
}
class Triangle extends Shape {
    constructor(name, color, width, height) {
        super();
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return 0.5 * this.width * this.height;
    }
}
