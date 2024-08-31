// Day 18 : Algorithms

// Task 1:
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
Object.freeze(sortedArr); // Locking the sorted array

console.log(sortedArr);

// Task 2:
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Find the minimum element in the remaining unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Example usage
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers);
console.log("Sorted array:", sortedNumbers);

// Task 3:
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", arr);
let sortedArray = quickSort(arr);
console.log("Sorted array:", sortedArray);

// Task 4:
function findtargetvalue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      console.log(`the target value is at ${i}`);
      return i;
    }
  }
  console.log("target value is not found in arr");
  return -1;
}
const arr = [20, 3, 54, 6, 5, 43, 3, 54];
findtargetvalue(arr, 54);

// Task 5:
function binarySearchrecur(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      console.log(`Target value found at index: ${mid}`);
      return mid;
    } else if (arr[mid] < target) {
      return binarySearchrecur(arr, target, mid + 1, end);
    } else {
      return binarySearchrecur(arr, target, start, mid - 1);
    }
  }

  console.log("Target value not found in the array.");
  return -1;
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
const targetValue = 50;
binarySearchrecur(arr, targetValue, 0, arr.length - 1);

// Task 6:
function countOccurance(str) {
  const countChar = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (countChar[char]) {
      countChar[char]++;
    } else {
      countChar[char] = 1;
    }
  }
  return countChar;
}
const str = "Hello, World";
console.log(countOccurance(str));

// Task 7:
function longestSubstringLength(s) {
  let maxLength = 0,
    start = 0;
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    if (charIndexMap.has(s[end])) {
      start = Math.max(charIndexMap.get(s[end]) + 1, start);
    }
    charIndexMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
const inputString = "abcabcbb";
const length = longestSubstringLength(inputString);
console.log(length); // Output: 3

// Task 8:
function rotateArr(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}
let arr = [1, 2, 3, 4, 5];
console.log(rotateArr(arr, 7));

// Task 9:
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);
