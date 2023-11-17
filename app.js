"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class TodoListImplementation {
    constructor() {
        this.notes = [];
    }
    addNote(title, content, requireConfirmation = false) {
        if (title.trim() === '' || content.trim() === '') {
            console.error('Title and content cannot be empty.');
            return;
        }
        const newNote = {
            id: this.notes.length + 1,
            title,
            content,
            createdDate: new Date(),
            editedDate: new Date(),
            status: false,
            requireConfirmation,
        };
        this.notes.push(newNote);
    }
    removeNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
    }
    editNote(id, title, content) {
        const noteIndex = this.findNoteIndexById(id);
        if (noteIndex !== -1) {
            this.notes[noteIndex].title = title;
            this.notes[noteIndex].content = content;
            this.notes[noteIndex].editedDate = new Date();
            if (this.notes[noteIndex].requireConfirmation) {
                this.notes[noteIndex].status = false;
            }
        }
        else {
            console.error('Note not found.');
        }
    }
    markAsDone(id) {
        const noteIndex = this.findNoteIndexById(id);
        if (noteIndex !== -1) {
            this.notes[noteIndex].status = true;
        }
        else {
            console.error('Note not found.');
        }
    }
    getNoteById(id) {
        return this.notes.find((note) => note.id === id);
    }
    getAllNotes() {
        return this.notes;
    }
    getUnfinishedNotesCount() {
        return this.notes.filter((note) => !note.status).length;
    }
    getFinishedNotesCount() {
        return this.notes.filter((note) => note.status).length;
    }
    searchNotes(query) {
        const lowerCaseQuery = query.toLowerCase();
        return this.notes.filter((note) => note.title.toLowerCase().includes(lowerCaseQuery) ||
            note.content.toLowerCase().includes(lowerCaseQuery));
    }
    sortByStatus() {
        this.notes.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));
    }
    sortByCreationDate() {
        this.notes.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
    }
    findNoteIndexById(id) {
        return this.notes.findIndex((note) => note.id === id);
    }
}
const todoList = new TodoListImplementation();
// example of use
todoList.addNote('Task1', 'Content1');
todoList.addNote('Task2', 'Content2', true);
todoList.editNote(1, 'Task 1 Updated', 'Updated Content 1');
todoList.markAsDone(1);
todoList.removeNote(2);
const allNotes = todoList.getAllNotes();
console.log(allNotes);
const unfinishedCount = todoList.getUnfinishedNotesCount();
const finishedCount = todoList.getFinishedNotesCount();
console.log(`Unfinished Notes: ${unfinishedCount}, Finished Notes: ${finishedCount}`);
const searchResults = todoList.searchNotes('Updated');
console.log('Search Results:', searchResults);
todoList;
