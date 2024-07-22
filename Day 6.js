// Day 6: Arrays

Task1:
let arry = [1,2,3,4,5]
console.log(arry)

Task2:
let arr = [1,2,3,4,5]
let first = arr[0]
// let last = arr.at(-1)
let last = arr[arr.length - 1]
console.log("the first and the last element of the array is " + first + " and " + last)

Task3:
let fruits = ["apple", "mango", "banana", "orange"]
fruits.push("kiwi")
console.log(fruits)

Task4:
let fruits = ["apple", "mango", "banana", "orange"]
fruits.pop()
console.log(fruits)

Task5:
let fruits = ["apple", "mango", "banana", "orange"]
fruits.shift()
console.log(fruits)

Task6:
let fruits = ["apple", "mango", "banana", "orange"]
fruits.unshift("grapes")
console.log(fruits)

Task7:
let num = [2,3,4,5,6]
let number = num.map(double)
function double(value,index,array){
   return value * 2
}
console.log(number)

Task8:
const arrnum = [1,2,3,4,5,6,7,8,9]
let even = arrnum.filter(evennum)
function evennum(value,index,array){
    return value%2==0
}
console.log(even)

Task9:
const numlist = [2,5,7,5,4,8];
const numb = numlist.reduce(reduc);
function reduc(total,value,index,array){
    return total + value;
}
console.log(numb)

Task10:
const list = [2,5,7,5,4,8];
let len = list.length
for (let i=0 ; i<len; i++){
    console.log(list[i])
}

Task11:
const list = [2,5,7,5,4,8];
let txt =""
list.forEach(func)
function func(value,index,array){
    txt += value + "\n"
}

console.log(txt)

Task12:
const multidimension = [
    ["shiv",3],
    ["raj",5],
    ["mohit",7]
]
console.log(multidimension)

Task13:
const multidimension = [
    ["shiv",3],
    ["raj",5],
    ["mohit",7]
]
console.log(multidimension[1][0])