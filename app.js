"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
}
class Rectangle {
    draw() {
        console.log("Drawing a rectangle");
    }
}
class Triangle {
    draw() {
        console.log("Drawing a triangle");
    }
}
class Ellipse {
    draw() {
        console.log("Drawing an ellipse");
    }
}
class GraphicEditor {
    drawShape(Draw) {
        const shape = Draw.createShape();
        shape.draw();
    }
}
class CircleDraw {
    createShape() {
        return new Circle();
    }
}
class RectangleDraw {
    createShape() {
        return new Rectangle();
    }
}
class TriangleDraw {
    createShape() {
        return new Triangle();
    }
}
class EllipseDraw {
    createShape() {
        return new Ellipse();
    }
}
const graphicEditor = new GraphicEditor();
graphicEditor.drawShape(new EllipseDraw());
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
