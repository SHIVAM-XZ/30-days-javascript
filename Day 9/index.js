// Task1:
document.getElementById("content").innerText = "Hello World!";

// Task2:
document.getElementsByClassName("container")[0].style.backgroundColor= "red";

// Task3:
let x = document.createElement("div");
x.id = "task3";
x.innerText = "Hello Motherfather";
document.body.appendChild(x)

// Task4:
let list = document.getElementById("list")
let lis = document.createElement("li")
lis.innerText = "About"
list.appendChild(lis)

// Task5:
let head = document.getElementById("select")
head.remove()

// Task6:
let child = document.getElementById("parent")
// child.removeChild(child.firstElementChild)
child.removeChild(child.lastElementChild)


// Task7:
const funct  =()=>{
    document.getElementById("text").setAttribute("type","button")
}

// Task8:
document.getElementById("one").classList.remove("color")
document.getElementById("two").classList.add("color")

// Task9:

const myfunction = ()=>{
    document.getElementById("tas").innerHTML = "Hello World!"
}

// Task10:
let boch = document.getElementById("ten")
boch.onmouseover = function(){
    boch.classList.remove("border")
    boch.classList.add("change")
}
boch.onmouseout = function(){
    boch.classList.add("border")
    boch.classList.remove("change")
}