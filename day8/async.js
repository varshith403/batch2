// let p3 = new Promise((resolve , reject)=>{
//     reject("failures");
// });

// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally"))

function fetchusers()
{
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    response.then(res=>{
        return res.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}
fetchusers();
