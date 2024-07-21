// Day 5: Functions

Task1:
function number(x){
    if(x%2==0){
        console.log("even number")
    }else {
        console.log("odd number")
    }
}
number("enter the number instead of string")

Task2:
function numb(x){
    return x*x;
}
console.log(numb(6))

Task3:
function numb(x,y){
    if(x>y){
        console.log("maximum number is " + x)
    }else {
        console.log("maximum number is " + y)
    }
}
numb(5,6)

Task4:
function concate(a,b){
    let str = a.concat(" ",b)
    console.log(str)
}
concate("hello","world!")

Task5:
const sum = (a,b)=>{
    console.log('sum of two number is '+ (a+b))
}
sum(3,6)

Task6:
let str = "assc@df4"
const arr = (x)=>{
    console.log(str.includes(x))
}
arr("ass")

Task7:
function add (a,b=4){
    console.log(a*b)
}
add(3)

Task8:
function greet(name,age=24){
    return `congratulation to ${name} for completing the graduation within the age of ${age} `
}
console.log(greet("rohan"))

Task9:
const fun = ()=>{
    console.log("printed")
}

function highorder(b){
    i=1
    while(i<=b){
        fun();
        i++
    }
}
highorder(fun,6)

Task10:
const func1 = (x)=>{
    return x+1
}
const func2 = (x)=>{
    return x+2
}
const higherorder= (y)=>{
    return func1(func2(y))
}
console.log(higherorder(5))