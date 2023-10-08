"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
// var result1: unknown = prompt("Enter the first number");
// var result2: unknown = prompt("Enter the first number");
// alert(result1);
// const array = [1, 2, 3]
// console.log(typeof(array));
// enum Count {
//     One = 1,
//     Two = 1
// }
// console.log(Count[1]);
// class School {
//   directions: any = [];
//   addDirection(direction: any) {
//     this.directions.push(direction);
//   }
// }
// class Direction <T> {
//   levels: number[] = [];
//   private _name: string;
//   get name(): string {
//     return this._name;
//   }
//   constructor(name: string) {
//     this._name = name;
//   }
//   addLevel(level: number) {
//     this.levels.push(level);
//   }
// }
// class Level {
//   groups: any[] = [];
//   private _program: any;
//   private _name: string;
//   constructor(name: string, program: any) {
//     this._name = name;
//     this._program = program;
//   }
//   get name() {
//     return this._name;
//   }
//   get program() {
//     return this._program;
//   }
//   addGroup(group: any) {
//     this.groups.push(group);
//   }
// }
// class Group {
//   _students: any = [];
//   directionName: string;
//   levelName: string;
//   get students() {
//     return this._students;
//   }
//   constructor(directionName: string, levelName: string) {
//     this.directionName = directionName;
//     this.levelName = levelName;
//   }
//   addStudent(student: string) {
//     this._students.push(student);
//   }
//   showPerformance() {
//     const sortedStudents = this.students.toSorted(
//       (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
//     );
//     return sortedStudents;
//   }
// }
// class Student {
//   grades: Record<string, number> = {};
//   attendance: boolean[] = [];
//   firstName: string;
//   lastName: string;
//   birthYear: number;
//   constructor(firstName: string, lastName: string, birthYear: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//   }
//   get fullName(): string {
//     return `${this.lastName} ${this.firstName}`;
//   }
//   set fullName(value: string) {
//     [this.lastName, this.firstName] = value.split(" ");
//   }
//   get age(): number {
//     return new Date().getFullYear() - this.birthYear;
//   }
//   setGrade(subject: string, grade: number) {
//     this.grades[subject] = grade;
//   }
//   markAttendance(present: boolean) {
//     this.attendance.push(present);
//   }
//   getPerformanceRating(): number {
//     const gradeValues = Object.values(this.grades);
//     if (gradeValues.length === 0) return 0;
//     const averageGrade =
//       gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
//     const attendancePercentage =
//       (this.attendance.filter((present) => present).length /
//         this.attendance.length) *
//       100;
//     return (averageGrade + attendancePercentage) / 2;
//   }
// }
class School {
    constructor() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = {}; // Name, surname, position, company, experience, courses, contacts
    }
    get areas() {
        return this._areas;
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(area) {
        const index = this._areas.indexOf(area);
        this._areas.splice(index, 1);
    }
    get lecturers() {
        return this._lecturers;
    }
    addLecturer(lecturer) {
        this._areas.push(lecturer);
    }
    removeLecturer(lecturer) {
        const index = this._areas.indexOf(lecturer);
        this._areas.splice(index, 1);
    }
}
class Area {
    constructor(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get levels() {
        return this._levels;
    }
    addLevel(level) {
        this._levels.push(level);
    }
    removeLevel(level) {
        const index = this._levels.indexOf(level);
        if (index !== -1) {
            this._levels.splice(index, 1);
        }
    }
}
class Level {
    constructor(name, description) {
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get groups() {
        return this._groups;
    }
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(group) {
        const index = this._groups.indexOf(group);
        if (index !== -1) {
            this._groups.splice(index, 1);
        }
    }
}
class Group {
    get area() {
        return this._area;
    }
    get status() {
        return this._status;
    }
    get students() {
        return this._students;
    }
    set status(value) {
        this._status = value;
    }
    addStudent(student) {
        this._students.push(student);
    }
    removeStudent(student) {
        const index = this._students.indexOf(student);
        if (index !== -1) {
            this._students.splice(index, 1);
        }
    }
    constructor(directionName, levelName) {
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this._area = `${directionName} - ${levelName}`;
        this._status = true;
    }
    setStatus(status) {
        this._status = status;
    }
    showPerformance() {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = {}; // workName: mark
        this._visits = {}; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    setGrade(workName, mark) {
        this._grades[workName] = mark;
    }
    setVisit(lesson, present) {
        this._visits[lesson] = present;
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (Object.values(this._visits).filter(present => present).length / Object.values(this._visits).length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
