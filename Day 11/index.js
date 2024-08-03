// Day 11: Promises and Async/Await

// Task1:
let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("True")
        console.log("promise is resolved")
    },2000)
})

// Task2:
let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("promise is rejected")

    },2000)
})
promise.catch((error)=>{
    console.log("some error")
})

// Task3:
function fetchdata(url ,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`data from ${url}`)
            console.log(`${url}`)
        },delay)
    })
}
fetchdata("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",2000)
.then((data)=>{
    console.log(data)
    return fetchdata("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",4000)
}).then((data2)=>{
    console.log(data2)
}).catch((error)=>{
    console.log("some error occured")
})

// Task4:
const pro = async()=>{
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("promise is finished")
            resolve(45)
        },2000)
    })
    let func = await p1
    // return func
    console.log(func)
}
console.log("waiting to fetch")
pro()
// pro().then((value)=>{
//     console.log(value)
// })

// Task5:
async function my(){
    let mess = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("error")
        },2000)
    })
    
    try{
        await mess
    }catch(error){
        console.log("some error occured")
    }
}
my()

// Task6:
fetch("https://catfact.ninja/fact")
.then((data)=>{
    return data.json()
}).then((data1)=>{
    console.log(data1)
}).catch((error)=>{
    console.log(error)
})

// Task7:
async function fetchd(){
    let f = fetch("https://api.nationalize.io?name=nathaniel")
    f.then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })   
}
async function api(){
    let access = await fetchd()
    console.log(access)
} 
api()

// Task8:
function myfunction(value,del){
    let pr1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${value}`)
        },del)    
    })
    return pr1
}
let pro1 = myfunction(56,2000)
let pro2 = myfunction("fulfilled",4000)
let pro3 = myfunction("resolved",6000)
// let pro1 = myfunction(56,2000).then((x)=>{console.log(x)})
// let pro2 = myfunction("fulfilled",4000).then((x)=>{console.log(x)})
// let pro3 = myfunction("resolved",6000).then((x)=>{console.log(x)})

Promise.all([pro1,pro2,pro3]).then((value)=>{
    console.log(value)
})


// Task9:
Promise.race([pro1,pro2,pro3]).then((value)=>{
    console.log(value)
})
