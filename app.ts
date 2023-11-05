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

// class School {
//   // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

//   _areas: string[] = [];
//   _lecturers: object = {}; // Name, surname, position, company, experience, courses, contacts

//   get areas(): string[] {
//     return this._areas;
//   }

//   addArea (area: string) {
//     this._areas.push(area)
//   }

//   removeArea (area: string) {
//     const index = this._areas.indexOf(area);
//     this._areas.splice(index, 1);
//   }

//   get lecturers() {
//     return this._lecturers;
//   }

//   addLecturer (lecturer: string) {
//     this._areas.push(lecturer)
//   }

//   removeLecturer (lecturer: string) {
//     const index = this._areas.indexOf(lecturer);
//     this._areas.splice(index, 1);
//   }

// }

// class Area {
//   // implement getters for fields and 'add/remove level' methods
//   _levels: number[] = [];
//   _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   get name(): string {
//     return this._name
//   }

//   get levels(): number[] {
//     return this._levels;
//   }

//   addLevel (level: number) {
//     this._levels.push(level);
//   }

//   removeLevel (level: number) {
//     const index = this._levels.indexOf(level);
//     if (index !== -1) {
//       this._levels.splice(index, 1);
//     }
//   }
// }

// class Level {
//   // implement getters for fields and 'add/remove group' methods

//   _groups: string[] = [];
//   _name: string;
//   _description: string;

//   constructor(name: string, description: string) {
//     this._name = name;
//     this._description = description;
//   }

//   get name(): string {
//     return this._name;
//   }

//   get description(): string {
//     return this._description;
//   }

//   get groups(): string[] {
//     return this._groups;
//   }

//   addGroup(group: string) {
//     this._groups.push(group);
//   }

//   removeGroup(group: string) {
//     const index = this._groups.indexOf(group);
//     if (index !== -1) {
//       this._groups.splice(index, 1);
//     }
//   }
// }

// class Group {
//   // implement getters for fields and 'add/remove student' and 'set status' methods

//   _area: string;
//   _status: boolean;
//   _students: string[] | any = []; // Modify the array so that it has a valid toSorted method*

//   get area(): string {
//     return this._area;
//   }

//   get status(): boolean {
//     return this._status;
//   }

//   get students(): string[] {
//     return this._students;
//   }

//   set status(value: boolean) {
//     this._status = value;
//   }

//   addStudent(student: string) {
//     this._students.push(student);
//   }

//   removeStudent(student: string) {
//     const index = this._students.indexOf(student);
//     if (index !== -1) {
//       this._students.splice(index, 1);
//     }
//   }

//   constructor(directionName: string, levelName: string) {
//     this._area = `${directionName} - ${levelName}`;
//     this._status = true;
//   }

//   setStatus(status: boolean) {
//     this._status = status;
//   }

//   showPerformance() {
//     const sortedStudents = this._students.toSorted(
//       (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
//     );
//     return sortedStudents;
//   }
// }

// class Student {
//   // implement 'set grade' and 'set visit' methods

//   _firstName: string;
//   _lastName: string;
//   _birthYear: number;
//   _grades: Record<string, number> = {}; // workName: mark
//   _visits: Record<string, boolean> = {}; // lesson: present

//   constructor(firstName: string, lastName: string, birthYear: number) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._birthYear = birthYear;
//   }

//   get fullName(): string {
//     return `${this._lastName} ${this._firstName}`;
//   }

//   set fullName(value) {
//     [this._lastName, this._firstName] = value.split(' ');
//   }

//   get age() {
//     return new Date().getFullYear() - this._birthYear;
//   }

//   setGrade(workName: string, mark: number) {
//     this._grades[workName] = mark;
//   }

//   setVisit(lesson: string, present: boolean) {
//     this._visits[lesson] = present;
//   }

//   getPerformanceRating() {
//     const gradeValues = Object.values(this._grades);

//     if (!gradeValues.length) return 0;

//     const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
//     const attendancePercentage = (Object.values(this._visits).filter(present => present).length / Object.values(this._visits).length) * 100;

//     return (averageGrade + attendancePercentage) / 2;
//   }
// }


// interface IShape {
//   readonly name: string;
//   readonly color: string;
//   calculateArea(): number;
// }

// interface IRadios {
//   readonly radius: number
// }

// interface IHeight {
//   readonly height: number
// }

// interface IWidth {
//   readonly width: number
// }

// interface IPrint {
//   print(): void;
// }

// abstract class Shape implements IShape {
//   abstract readonly name: string;
//   abstract readonly color: string;

//   abstract calculateArea(): number;
// }

// class Circle extends Shape implements IRadios {
//   constructor(readonly name: string, readonly color: string, readonly radius: number) {
//     super()
//   }

//   override calculateArea(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }

// class Rectangle extends Shape implements IPrint, IHeight, IWidth {
//   constructor(readonly name: string, readonly color: string, readonly width: number, readonly height: number) {
//     super();
//   }

//   override calculateArea(): number {
//     return this.width * this.height;
//   }

//   print() {
//     console.log(`Area of ${this.name} = ${this.width} * ${this.height}`);
//   }
// }

// class Square extends Shape implements IPrint, IWidth {
//   constructor(readonly name: string, readonly color: string, readonly width: number) {
//     super();
//   }

//   override calculateArea(): number {
//     return this.width * this.width;
//   }

//   print() {
//     console.log(`Area of ${this.name} = ${this.width} * ${this.width}`);
//   }
// }

// class Triangle extends Shape implements IHeight, IWidth {
//   constructor(readonly name: string, readonly color: string, readonly width: number, readonly height: number) {
//     super();
//   }

//   override calculateArea(): number {
//     return 0.5 * this.width * this.height;
//   }
// }

// interface IMyIndexSignature {
//   [key: string ]: number | string;
// }

// const A: IMyIndexSignature = {
//   key: '2',
//   123: 45,
//   key1: 67
// }

// interface IFunctionIndex{
//   [key: string]: (...args: any[]) => any;
// }

// const B: IFunctionIndex = {
//   sum: (a,b) => a + b,
//   greet: (name) => `Hello, ${name}!`
// }

// interface IArray {
//   [index: number]: string
//   length: number
// }

// const myArrayLikeObject: IArray = {
//   0: 'Its',
//   1: 'written',
//   2: 'on',
//   3: 'TypeScript',
//   length: 4
// }

// interface IDynamicProperties {
//   name: string;
//   [key: string]: any
// }

// const dude: IDynamicProperties = {
//   name: "Alex",
//   city: 'Dnipro',
//   course: 2,
//   learns: true
// }

// interface IIndexCreate {
//   [key: string]: any;
// }

// interface IIndexAdd extends IIndexCreate {
//   age: number
// }

// const person: IIndexAdd = {
//   name: "Alex",
//   age: 18
// }

// function areAllValuesNumbers(obj: { [key: string]: any }): boolean {
//   for (const key in obj) {
//     if (typeof obj[key] !== "number") {
//       return false;
//     }
//   }
//   return true;
// }

// const obj1 = { key1: 1, key2: 1.5, key3: "string" };
// const obj2 = { key1: 1, key2: 1.5, key3: 23521 };

// console.log(areAllValuesNumbers(obj1));
// console.log(areAllValuesNumbers(obj2));



// type DeepReadonly<T> = {
//     readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
// };

// interface MyObject {
//     a: number;
//     c: {
//         x: boolean;
//         y: number[];
//         z: null
//     };
// }

// const readOnlyObj: DeepReadonly<MyObject> = {
//     a: 123,
//     c: {
//         x: true,
//         y: [1, 2, 3],
//         z: null
//     },
// };


// type DeepRequireReadonly<T> = {
//     readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
// };

// const deepRequireOnlyObj: DeepRequireReadonly<MyObject> = {
//     a: 123,
//     c: {
//         x: true,
//         y: [1, 2, 3],
//         z: null
//     },
// };


// type UpperCaseKeys<T> = {
//     [K in keyof T as Uppercase<string & K>]: T[K];
// };

// interface MyObjectUC {
//     name: string;
//     age: number;
// }

// type MyObjectUpperCase = UpperCaseKeys<MyObject>;


// enum MyEnum {
//     Key1,
//     Key2,
//     Key3,
// }

// type EnumFunction<T extends Record<string, (...args: any) => any>> = {
//     [K in keyof T as `get-${string & K}`]: T[K];
// };

// type EnumFunctions = EnumFunction<{
//     [MyEnum.Key1]: () => void;
//     [MyEnum.Key2]: () => string;
//     [MyEnum.Key3]: (param: number) => boolean;
// }>;


// type ObjectToPropertyDescriptor<T> = {
//     [K in keyof T]: PropertyDescriptor;
// };

// const obj = {
//     property1: 42,
//     property2: 'Hello',
// };

// const propertyDescriptorObj: ObjectToPropertyDescriptor<typeof obj> = {
//     property1: {
//         value: 42,
//         writable: true
//     },
//     property2: {
//         value: 'Hello',
//         writable: true
//     }
// };


// type ParamType<T> = T extends (param: infer P) => void ? (P extends Array<infer U> ? U : P) : never;

// function f1(param: number): void {}

// function f2(param: number[]): void {}

// let a1: ParamType<typeof f1>;

// let a2: ParamType<typeof f2>;


interface Film {
    title: string;
    releaseYear: number;
    rating: number;
    awards: string[];
}

interface FilmCategory {
    name: string;
    films: Film[];
}

interface Filters {
    titleFilter?: { filter: string };
    ratingFilter?: { filter: number; filterTo: number };
    releaseYearFilter?: { filter: number; filterTo: number };
    awardsFilter?: { values: string[] };
}

class FilmList {
    films: Film[];
    filters: Filters;

    constructor(films: Film[]) {
        this.films = films;
        this.filters = {};
    }

    applyFilters(filters: Filters) {
        this.filters = filters;
        this.films = this.films.filter(
            (film) =>
                !filters.ratingFilter ||
                (film.rating >= filters.ratingFilter.filter &&
                    film.rating <= filters.ratingFilter.filterTo)
        );
    }

    applySearchValue(searchValue: string) {
        this.films = this.films.filter((film) =>
            film.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
}

class CategoryList {
    categories: FilmCategory[];
    filters: Filters;

    constructor(categories: FilmCategory[]) {
        this.categories = categories;
        this.filters = {};
    }

    applyFilters(filters: Filters) {
        this.filters = filters;
        this.categories.forEach((category) => {
            category.films = category.films.filter(
                (film) =>
                    (filters.ratingFilter?.filter ?? film.rating) <= film.rating &&
                    film.rating <= (filters.ratingFilter?.filterTo ?? film.rating)
            );
        });
    }

    applySearchValue(searchValue: string) {
        this.categories.forEach((category) => {
            category.films = category.films.filter((film) =>
                film.title.toLowerCase().includes(searchValue.toLowerCase())
            );
        });
    }
}

