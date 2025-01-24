// let element = document.getElementById("demo");
// element.innerText  = "DOM";
// console.log(element);

// let div = document.getElementBtId("test");
// div.innertHTML = "<h1>Header/<h1>"
// console.log(div)
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].computedStyleMap.backgroundColor="yelow"

// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     console.log(element);
//     element.computedStyleMap.backgroundColor='teal'
// })

let ele = document.querySelectorAll(".test");
[...ele].map(element=>{
    console.log(element.innerText);
})