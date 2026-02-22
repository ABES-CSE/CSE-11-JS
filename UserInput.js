let name=`Rohan`;
console.log(`Hello, My Name Is ${name}`);
let username;
// username=prompt(`What's your username?`);
// console.log(username);
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`;
}