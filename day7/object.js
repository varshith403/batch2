let userdata ={
    name:"varshith",
    age:21,
    city:"karimnagar"
};
console.log(userdata.name , typeof(userdata));
let x = JSON.stringify(userdata);
console.log(x , typeof(x));
let y = JSON.parse(x);
console.log(y);