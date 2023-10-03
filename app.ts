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

class School {
  directions: any = [];

  addDirection(direction: any) {
    this.directions.push(direction);
  }
}

class Direction <T> {
  levels: number[] = [];
  private _name: string;

  get name(): string {
    return this._name;
  }
  
  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number) {
    this.levels.push(level);
  }
}

class Level {
  groups: any[] = [];
  private _program: any;
  private _name: string;

  constructor(name: string, program: any) {
    this._name = name;
    this._program = program;
  }

  get name() {
    return this._name;
  }

  get program() {
    return this._program;
  }

  addGroup(group: any) {
    this.groups.push(group);
  }
}

class Group {
  _students: any = [];
  directionName: string;
  levelName: string;

  get students() {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string) {
    this._students.push(student);
  }

  showPerformance() {
    const sortedStudents = this.students.toSorted(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: Record<string, number> = {};
  attendance: boolean[] = [];
  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number) {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean) {
    this.attendance.push(present);
  }
  
  

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades);
  
    if (gradeValues.length === 0) return 0;
  
    const averageGrade =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
  
    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;
  
    return (averageGrade + attendancePercentage) / 2;
  }
}
