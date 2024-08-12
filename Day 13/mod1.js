// Task1:
/* module.exports = function add(a, b) {
  return a + b;
}; */

// Task2:
export const obj = {
  name: "rajiv",
  status: "single",
  about() {
    return `hello i'm ${this.name} and right now i'm ${this.status}`;
  },
};

// Task3:
export function func1() {
  return "i'm done";
}
export function func2(a, b) {
  return a + b;
}

// Task4:
const greet = (name) => {
  return `Hello i'm ${name}`;
};
export default greet;

// Task5:
export const str = "ONE PIECE";
export const num = 53;
export function call() {
  return "call me luckyyyyyyyy";
}
export const div = (a, b) => {
  return a / b;
};

// Task6:
// Task7:
// Task8:
