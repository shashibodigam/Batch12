// let p1 = new Promise((resolve,reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)  =>{
//     resolve("success");
// });
// console.log(p2);
// p2.then((response) =>
// {
// console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failures");
// });
// console.log(p3);
//  function fetchUsers()
//  {
//     let x = fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(x);
//     x
//     .then((response)=>{
//         // console.log(response)
//         // console.log(response.json());
//         return response.json().then(data=>{
//             console.log(data);
//             let store = document.getElementById("store");
//             data.map((user)=>{
//                 store.innerHTML += 
//                 <tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.company.name}</td> 
//                 </tr>
//             })
//         })
//     })
//     .catch(err=>console.log(err))

// }
// fetchUsers()
async function fetchusers(){
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    console.log(data);
    
}
fetchusers();