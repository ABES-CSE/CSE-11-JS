//Document Object Model
//Document object is property of window object.

const result=document.getElementById("para");
result.innerHTML="Hello Hell";
result.title="Whatever Man";
result.innerText="<b>Ragnarok</b>";

const x=document.getElementsByClassName();
const what=document.getElementsByTagName();

document.querySelector("myId/myClass/tag");

const text=document.querySelector("ul li:nth-child(3)");
text.style.backgroundColor="green";

const text2=document.querySelectorlectorAll("ul li");
for(x in text2){
    text2[x].style.backgroundColor="green";
    text2[x].style.margin="10px";
    text2[x].style.color="blue";
}

//Html DOM Properties:
/*
tagName: returns tag for nodes
innerText: returns text content for element and all its children
innerHTML: returns the plan text or HTML contents in the elements
innerContent: returns textual content
*/