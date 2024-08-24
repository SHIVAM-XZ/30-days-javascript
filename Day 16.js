// Day 16 - Recursion

// Task1:
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1; // Base case
  } else {
    return n * factorial(n - 1); //recursive call
  }
}
console.log(factorial(3));

// Task2:
function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(7));

// Task3:
function sumArray(arr, i) {
  if (arr.length === i) {
    return 0;
  }
  return arr[i] + sumArray(arr, i + 1);
}
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array, 0));
//   OR
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

// Task4:
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMax(arr.slice(1)));
}
const array = [2, 4, 7, 5, 4];
console.log(findMax(array));

// Task5:
function reverseStr(str) {
  if (str === "") {
    return "";
  }
  return str.charAt(str.length - 1) + reverseStr(str.slice(0, str.length - 1));
}
console.log(reverseStr("Hello"));
// OR
function reverseStr(str) {
  if (str === "") {
    return "";
  }
  return reverseStr(str.slice(1)) + str[0];
}
console.log(reverseStr("Hello"));

// Task6:
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str.charAt(str.length - 1)) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
}
// console.log(isPalindrome("Hello"))
console.log(isPalindrome("racecar"));
console.log(isPalindrome("H"));

// Task7:
function Binarysearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    return mid;
  }
  if (arr[mid] > target) {
    return Binarysearch(arr, target, start, mid - 1);
  }
  return Binarysearch(arr, target, mid + 1, end);
}
const arr = [2, 3, 7, 8, 10, 15, 20];
console.log(Binarysearch(arr, 10, 0, arr.length - 1));

// Task8:
function Countoccurance(arr, target, i = 0) {
  if (i > arr.length) {
    return 0;
  }
  let count = arr[i] == target ? 1 : 0;
  return count + Countoccurance(arr, target, i + 1);
}
const arr = [1, 2, 3, 4, 2, 4, 5, 4, 5, 3, 3, 2, 5];
console.log(Countoccurance(arr, 3));
