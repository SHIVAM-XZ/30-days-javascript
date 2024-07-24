// Day 6: ES6+ Features

Task1:
let name = "Shivam"
let age = 22
console.log(`watashiwa namaewa ${name} desu ${age} year old`)

Task2:
let str = `Even so my sun one early morn did shine,
With all triumphant splendour on my brow;
But out, alack, he was but one hour mine,
The region cloud hath mask’d him from me now …`
console.log(str)

Task3:
let arr = ["apple","mango","grapes","kiwi","orange"]
let [arr1,arr2] = arr
// let {[0]:arr1,[1]:arr2}=arr
// let [arr1,,,,arr2]=arr
// let [arr1,arr2, ...rest]=arr
console.log(arr1,arr2)

Task4:
const object = {
    title : "One Piece",
    author : "ODA",
}
let {title , author, year = 1995} = object
console.log(title,author)

Task5:
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,0]
let arr = [...arr1,...arr2]
console.log(arr)

Task6:
let result = 0
const sum = (...arg)=>{
    for (let i of arg){
        result += i
    }
    return result
}
console.log(sum(1,2,3,4))

Task7:
const product = (a,b=1)=>{
    return a*b
}
console.log(product(7))

Task8:
let obj = {
    title : "Monkey .D. Luffy",
    author: "ODA",
    id : function(){
        return `${this.title} is created by ${this.author}`;
    }
}
console.log(obj)
console.log(obj.id())

Task9:
let book = "name of book"
let name = "name of character"
const objt ={
    [book] : "Bleach",
    [name]: "ichigo kurosaki"
}
console.log(objt)