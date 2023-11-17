"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
var TodoType;
(function (TodoType) {
    TodoType["Default"] = "default";
    TodoType["RequireConfirmation"] = "requireConfirmation";
})(TodoType || (TodoType = {}));
class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(title, content, todoType = TodoType.Default) {
        if (title.trim() === '' || content.trim() === '') {
            console.error('Title and content cannot be empty.');
            return;
        }
        const newTodo = {
            id: this.todos.length + 1,
            title,
            content,
            createdDate: new Date(),
            editedDate: new Date(),
            isDone: false,
            todoType,
        };
        this.todos.push(newTodo);
    }
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    editTodo(id, title, content) {
        const todoIndex = this.findTodoIndexById(id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].title = title;
            this.todos[todoIndex].content = content;
            this.todos[todoIndex].editedDate = new Date();
            if (this.todos[todoIndex].todoType === TodoType.RequireConfirmation) {
                this.todos[todoIndex].isDone = false; // Reset status for confirmed todos
            }
        }
        else {
            console.error('Todo not found.');
        }
    }
    markAsDone(id) {
        const todoIndex = this.findTodoIndexById(id);
        if (todoIndex !== -1) {
            this.todos[todoIndex].isDone = true;
        }
        else {
            console.error('Todo not found.');
        }
    }
    getTodoById(id) {
        return this.todos.find((todo) => todo.id === id);
    }
    getAllTodos() {
        return this.todos;
    }
    getUnfinishedTodosCount() {
        return this.todos.filter((todo) => !todo.isDone).length;
    }
    getFinishedTodosCount() {
        return this.todos.filter((todo) => todo.isDone).length;
    }
    searchTodos(query) {
        const lowerCaseQuery = query.toLowerCase();
        return this.todos.filter((todo) => todo.title.toLowerCase().includes(lowerCaseQuery) ||
            todo.content.toLowerCase().includes(lowerCaseQuery));
    }
    sortByStatus() {
        this.todos.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1));
    }
    sortByCreationDate() {
        this.todos.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
    }
    findTodoIndexById(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }
}
// example of use
const todoList = new TodoList();
todoList.addTodo('Task 1', 'Content 1');
todoList.addTodo('Task 2', 'Content 2', TodoType.RequireConfirmation);
todoList.editTodo(1, 'Task 1 Updated', 'Updated Content 1');
todoList.markAsDone(1);
todoList.removeTodo(2);
const allTodos = todoList.getAllTodos();
console.log(allTodos);
const unfinishedCount = todoList.getUnfinishedTodosCount();
const finishedCount = todoList.getFinishedTodosCount();
console.log(`Unfinished Todos: ${unfinishedCount}, Finished Todos: ${finishedCount}`);
const searchResults = todoList.searchTodos('Updated');
console.log('Search Results:', searchResults);
todoList.sortByStatus();
console.log('Sorted by Status:', todoList.getAllTodos());
todoList.sortByCreationDate();
console.log('Sorted by Creation Date:', todoList.getAllTodos());
