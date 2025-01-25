let ele = document.getElementsByClassName("test");
ele[0].style.backgroundColor="dodgerblue"
//console.log(ele);
//console.log(Array(ele));//this method used to check whether the arry is pre array.

//! SPread operator:- This operator is used to take out each and every value from 
//!Original array and store it in one more new array (pure array).

//Syntax of Sread  - [...varaible]

// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundColor="tomato";
//     element.style.color="white";
//     element.style.textTransform = "uppercase";
// })

let ele1 = document.querySelector("#demo");
console.log(ele1);
let ele2 = document.querySelector(".test");
console.log(ele2);

let bgcolor = document.querySelectorAll(".bgcolor");
[...bgcolor].map(element=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor = element.innerText;

    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor = "transperent";
    })
})