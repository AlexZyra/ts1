"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class Square {
    draw() {
        console.log("Drawing a square");
    }
}
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
}
class Triangle {
    draw() {
        console.log("Drawing a triangle");
    }
}
const square = new Square();
square.draw();
const circle = new Circle();
circle.draw();
const triangle = new Triangle();
triangle.draw();
const shapes = [square, circle, triangle];
shapes.forEach((shape) => shape.draw());
class User {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `User: ${this.name}`;
    }
}
class Task {
    constructor(title, description, assignee) {
        this.title = title;
        this.description = description;
        this.assignee = assignee;
    }
    toString() {
        return `Task: ${this.title}`;
    }
}
class Developer {
    constructor(name) {
        this.name = name;
    }
    createTask(title, description) {
        console.log(`Developer ${this.name} created a task.`);
        return new Task(title, description);
    }
    assignTask(task, assignee) {
        console.log(`Developer ${this.name} assigned a task to ${assignee}.`);
        task.assignee = assignee;
    }
    completeTask(task) {
        console.log(`Developer ${this.name} completed the task: ${task.title}`);
    }
}
class Manager {
    constructor(name) {
        this.name = name;
    }
    createTask(title, description) {
        console.log(`Manager ${this.name} created a task.`);
        return new Task(title, description);
    }
    assignTask(task, assignee) {
        console.log(`Manager ${this.name} assigned a task to ${assignee}.`);
        task.assignee = assignee;
    }
    completeTask(task) {
        console.log(`Manager ${this.name} completed the task: ${task.title}`);
    }
}
class HighLevelModule {
    constructor(handler) {
        this.messageHandler = handler;
    }
    sendMessage(message) {
        console.log(`High-level module sends a message: ${message}`);
        this.messageHandler.handleMessage(message);
    }
}
class LowLevelModuleA {
    handleMessage(message) {
        console.log(`Low-level module A handles the message: ${message}`);
    }
}
class LowLevelModuleB {
    handleMessage(message) {
        console.log(`Low-level module B handles the message: ${message}`);
    }
}
