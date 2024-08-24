// Day 15 - Closures

// Task1:
function outerfunc() {
  let outer = "Hello! how are you?";
  return function innerfunc() {
    console.log(outer);
  };
}
let inner = outerfunc();
inner();
// OR
function outerfunc() {
  let outer = 37;
  return function innerfunc(inner) {
    console.log(outer + inner);
  };
}
const a = outerfunc();
a(9);

// Task2:
function createcounter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  function getcount() {
    console.log(count);
  }
  return {
    increment,
    decrement,
    getcount,
  };
}
const counter = createcounter();
console.log(counter.increment());
console.log(counter.increment());
counter.getcount();

// Task3:
function generateuniqueId() {
  let lastId = 0;
  return function increment() {
    lastId++;
    return `Id-${lastId}`;
  };
}
const generateId = generateuniqueId();
console.log(generateId());
console.log(generateId());

// Task4:
function createGreeting(username) {
  return function () {
    console.log(`Hello, ${username}!`);
  };
}

const greetUser = createGreeting("Alice");
greetUser();

// Task5:
function functionArray(count) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(function () {
      console.log(`Function at the index ${i} is called`);
    });
  }
  return arr;
}
let index = functionArray(5);
index.forEach((x) => x());

// Task6:
function Items() {
  let items = [];

  function additem(item) {
    items.push(item);
  }
  function removeitem(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`${item} removed`);
    }
  }
  function listitems() {
    console.log(items);
  }
  return {
    additem,
    removeitem,
    listitems,
  };
}
const Item = Items();
Item.additem("ape");
Item.additem("cape");
Item.removeitem("ape");
Item.listitems();

// Task7:
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const add = memoize(function (a, b) {
  return a + b;
});

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(2, 3));

// Task8:

function memoize(fn) {
  const cache = {};
  return function (n) {
    if (cache[n] !== undefined || n in cache) return cache[n];
    return (cache[n] = fn(n));
  };
}

const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));

console.log(factorial(5)); // Outputs: 120
console.log(factorial(6)); // Outputs: 720
console.log(factorial(5)); // Outputs: 120 (retrieved from cache)
