// Day 7: Objects

Task1:
const book = {
    title : "The Abbys",
    author : "Manjulika",
    year : 1995
}
console.log(book)

Task2:
console.log(book.title + " and " + book.author)

Task3:
const book = {
    title : "The Abbys",
    author : "Manjulika",
    year : 1995,
    id : function(){
        return this.title + " and " + this.author;
    }
}
console.log(book.id())

Task4:
book.date = function(){
    return this.year
}

console.log(book.date())

Task5:
const library ={
    Name: "Shivam",
    Books: [
        {
        title : "The Abbys",
        author : "Manjulika",
        year : 1995,
        },
        {
        title: "one piece",
        author : "Monkey .D. Luffy",
        year : 1996,
        },
        {
        title : "bleach",
        author : "Ichigo",
        year : 1992,
        }]
}
console.log(library)

Task6:
console.log(library.Books[0].title)
console.log(library.Books[1].title)
console.log(library.Books[2].title)
console.log(library.Name)

Task7:
const boook = {
    "title" : "The Abbys",
    "author" : "Manjulika",
    "year" : 1995,
    "id" : function(){
        return this.title + " and " + this.year;
    }
}
console.log(boook.id())

Task8:
const book = {
    title : "The Abbys",
    author : "Manjulika",
    year : 1995,
    id : function(){
        return this.title + " and " + this.author;
    }
}
let x = ""
for (let i in book){
    x += book[i] + "\n"
}
console.log(x)

Task9:
let key = Object.keys(book)
let value = Object.values(book)
console.log(key)
console.log(value)