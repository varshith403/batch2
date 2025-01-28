// let mainEle = document.createElement("div");
// mainEle.setAttribute("id" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2024/11/11/17/39/dog-9190504_640.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");

// let h1 = document.createElement("hi");
// h1.innerText="CAT";

// let btn = document.createElement("button");
// btn.innerText="view More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle)

let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("upass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.getElementById("gender");

check.addEventListener("click" , (event)=>{
    if(event.target.checked == true){
        password.setAttribute("type" , "text");
        show.innerText = "hide password";
    }else{
        password.setAttribute("type" , "password");
        show.innerText="showpassword";
    }
})

