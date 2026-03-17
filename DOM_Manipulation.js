const result=document.getElementById("para");
result.innerHTML="Hello World";
result.title="jk";

const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="Jitendra";
x[1].innerHTML="Chauhan";

const y=document.getElementsByTagName("p");
result3[1].style.color="blue";
result4[1].innerText="my paragraph";

document.querySelector("myId/myClass/tag");
const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";

const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}

const element=document.getElementById("myH1");
let text=element.getAttribute("class");
document.getElementById("demo").innerHTML=text;

function myFunction(){
    document.getElementById("myH1").setAttribute("class","democlass");
}

//DOM Append Menthod

const heading=document.createElement("h2");
const bodytag=document.getElementsByTagName("body");
bodytag[0].append(heading);
heading.innerText="hello";
heading.style.backgroundColor="blue";

//Events in JavaScript: Change in state of an object. An specific action occuring within a web page
//like clicking on an element, moving the mouse or pressing a key, or holding a page.

function onClick(){
    console.log("clicked");
}
function onMouseOver(){
    console.log("On Mouse Over");
}
function onMouseOut(){
    console.log("On Mouse Out");
}
function onmousedown(){
    console.log("On Mouse Down");
}

//Keyboard Events:
function customizeInput(){
    let element=document.getElementsByTagName("INPUT");
}
const z=document.querySelector("input");
z.addEventListener("focus",onhandlefocus);
z.addEventListener("blur",onhandleblur);

function onhandlefocus(){
    z.style.background="red";
}
function onhandleblur(){
    z.style.background="yellow";
    z.style.borderColor="green";
}
//Window/Document Events: onload, onunload, onresize, etc.

function onload(){
    alert("Window loaded successfully");
}
