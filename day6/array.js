let user1 = "pranav";
let user2 = "chaithu";
let user3 = "harish";
let user4 = "praveen";

console.log("user1");
console.log("user2");
console.log("user3");
console.log("user4");

let users = ["sanjay" , "muzammil" , "pushpa",]
// console.log(users[0])
// for(let i=0;)
// users.map((user ,i)=>{
//     console.log(user , i);
// })
// let x =users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

let x = users.forEach((user,i)=>{
    console.log(user);
    return user;
});
console.log(x);

let userdetails = {
    name:"varshith",
    age:20,
    address:{
        city:"hyderabad",
        area:"karimnagar",
        pincode:{
            pin1:12345,
            pin2:3342,
        }
    }
}
console.log(userdetails.name);
console.log(userdetails.address.pincode.pin1);

// let user1 ={
//     name:"sathvik",
//     city:"Karimnagar"
// }

// let user2={
//     name:"Raghu",
//     city:"ananthpur"
// }

// let user3={
//     name:"Shilpa",
//     city:"Kammam"
// }

// let user4={
//     name:"Bharath",
//     city:"Sathupalli"
// }

// console.log(user1.name);
// console.log(user2.name);

let userDetails =[
    {
        name:"sathvik",
        city:"Karimnagar"
    },
    {
        name:"Raghu",
        city:"ananthpur"
    },
    {
        name:"Shilpa",
        city:"Kammam"
    },
    {
        name:"Bharath",
        city:"Sathupalli"
    }
];

userDetails.map((user)=>{
console.log(user.name);
})