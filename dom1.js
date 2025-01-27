let mainEle = document.createElement("div");
mainEle.setAttribute("Class" , "mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");

let image = document.createElement("img");
image.src = "https://cdn.pixabay.com/photo/2023/06/01/05/58/sign-8032702_960_720.jpg";
image.width = "300"
image.height="300"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class" , "bottomBlock");
console.log(bottomEle);
let h1 = document.createElement("h1");
h1.innerText = "Heading";


let btn = document.createElement("button");
btn.innerText="View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);

