// Day 3: Control Structures

Task1:
let num = prompt("enter number:");
num = parseInt(num)
num
if (num>0){
    result = "positive"
} else if(num<0){
    result = "negative"
}else {
    result = "zero"
}
console.log(result)

Task2:
let age = prompt("enter age");
age = parseInt(age)
if (age >= 18){
    console.log("you are eligible to vote")
} else{
    console.log("you are not eligible")
}

Task3:
x = 5
y = 4
z = 7
if (x>=y && x>=z){
    console.log("largest numer is "+ x)
}else if(y>=x && y>=z){
    console.log("largest numer is " + y)
}else if(z>=x && z>=y){
    console.log("largest numer is " + z)
}

Task4:
let day = parseInt(prompt("Enter number between 1 to 7: "))
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday");
        break;
}

Task5:
let marks = parseInt(prompt("enter your totsl marks:"))
switch(marks){
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 50:
        console.log("F");
        break;
}

Task6:
let numx = parseInt(prompt("enter number: "));
const number = (numx % 2==0) ? "even number" : "odd number";
console.log(number)

Task7:
let year = parseInt(prompt("Enter year:"))
if (year%4==0){
    if(year%100 ==0 && year%400==0){
        console.log("it is a leap year")
    }else {
    console.log("not a leap year")
}
}else {
    console.log("not a leap year")
}