// let p3 = new Promise((resolve , reject)=>{
//     reject("failures");
// });

// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally"))

// api fetching

// function fetchusers()
// {
//     let response = fetch("https://jsonplaceholder.typicode.com/users");
//     response.then(res=>{
//         return res.json().then(data=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchusers();

let p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("success")
    },4000);
});

async function demo(){
    console.log("start");
    let x =await p;
    console.log(x);
    console.log("end");
}
demo();

// async function fetchusers(){
//     let response =await fetch("https://jsonplaceholder.typicode.com/users");
//     let data =await response.json();
//     console.log(data);
// }
// fetchusers()