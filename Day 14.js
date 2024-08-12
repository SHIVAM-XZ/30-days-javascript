// Day 14: Classes

// Task1:
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Good Afternoon everyone i'm ${this.name}`;
  }
}
const per = new person("shivam", 22);
console.log(per.greet());

// Task2:
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  updateage(newage) {
    this.newage = newage;
    return `i'm ${this.name} and my age is ${this.newage}`;
  }
}
const per = new person("shivam", 22);
console.log(per.updateage(20));

// Task3:
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Good Afternoon everyone i'm ${this.name}`;
  }
}
const per = new person("shivam", 22);
console.log(per.greet());

class Student extends person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  identity() {
    return `the Id of the student is ${this.studentId}`;
  }
}
const student = new Student("rajat", 24, 007);
console.log(student.identity());

// Task4:
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Good Afternoon everyone i'm ${this.name}`;
  }
}
const per = new person("shivam", 22);
console.log(per.greet());

class Student extends person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  greet() {
    return `the Id of the student is ${this.studentId} and his name is ${this.name}`;
  }
}
const student = new Student("rajat", 24, 007);
console.log(student.greet());

// Task5:
class Person {
  static name = "rohan";

  static genericgreet() {
    return `greeting from ${this.name}`;
  }
}
console.log(Person.genericgreet());

// Task6:
class Person {
  constructor(name) {
    this.name = name;
  }

  static genericgreet() {
    return `greeting from ${this.name}`;
  }
}
console.log(Person.genericgreet());
class Student extends Person {
  static studentcount = 0;

  constructor(name, studentid) {
    super(name);
    this.studentid = studentid;
    Student.studentcount++;
  }
}
const st1 = new Student("rahul", 001);
const st2 = new Student("ruhi", 003);
console.log(Student.studentcount);

// Task7:
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const per1 = new Person("dale", "philip");
console.log(per1.fullName);

// Task8:
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set Name(name) {
    const [myfirstName, mylastName] = name.split(" ");
    this.firstName = myfirstName;
    this.lastName = mylastName;
  }
}
const per1 = new Person("dale", "philip");
console.log(per1.fullName);
Person.Name = "virat kohli";
console.log(Person.Name);
console.log(Name.mylastName);
