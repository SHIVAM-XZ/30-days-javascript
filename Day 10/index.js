// Task1:
let first = document.getElementById("btn");
first.addEventListener("click", change)
function change(){
    document.getElementById("content").innerText= "hello Luffy";
}

// Task2:
function visibility(){
    document.getElementsByClassName("src")[0].style.visibility = "hidden"
}

// Task3:
function bg(){
    document.getElementById("ok").classList.remove("thrice")
    document.getElementById("ok").classList.add("change")
}

// Task4:
function reset(){
    document.getElementById("ok").classList.remove("change")
    document.getElementById("ok").classList.add("thrice")
}

// Task5:
let inp = document.getElementById("text")
inp.addEventListener('keydown', (event)=>{
    // document.getElementById("show").innerHTML="key pressed = "+ event.key
    console.log(event.key)
});

// Task6:
let start = document.getElementById("para")
start.addEventListener("keyup", (up)=>{
    document.getElementById("grap").innerHTML= up.key
})

// Task7:
document.getElementById("form").addEventListener("submit",(ev)=>{
    const Fname = document.getElementById("Fname").value
    const Lname = document.getElementById("Lname").value
    console.log(Fname , Lname)
    ev.preventDefault()
})

// Task8:
let dropdown = document.getElementById("dropdown")
let para = document.getElementById("paragraph")
dropdown.addEventListener("change",()=>{
    const selectedvalue = dropdown.value
    para.innerHTML = "selected item is : "+ selectedvalue
})

// Task9:
let List = document.querySelector("ul")
List.addEventListener("click",(e)=>{
    if (e.target.tagName == "LI"){
        console.log("item in list is: "+ e.target.innerHTML)
    }
})

// Task10:
let parent = document.getElementById("parent")
parent.addEventListener('click',function(event){
    if (event.target.tagName == "BUTTON"){
        console.log("button clicked" + event.target.innerHTML)
    }
})
const newbutton = document.createElement("button")
newbutton.innerText = "button 3"
parent.appendChild(newbutton)