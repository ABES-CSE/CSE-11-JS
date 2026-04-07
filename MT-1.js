let heading=document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");

let changeHeading = document.getElementById("changeHeading");
let changeBackground = document.getElementById("changeBackground");
let increaseFont = document.getElementById("increaseFont");
let showPara = document.getElementById("showPara");

changeHeading.addEventListener("click",function(){
    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter some text!");
    }
});

changeBackground.addEventListener("click", function(){
    let colors = ["blue", "green", "pink", "yellow", "violet"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

increaseFont.addEventListener("click", function () {
    let currentSize = window.getComputedStyle(para).fontSize;
    let newSize = parseFloat(currentSize) + 2;
    para.style.fontSize = newSize + "px";
});

showPara.addEventListener("click", function(){

})