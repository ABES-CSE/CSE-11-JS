let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");

let btnHeading = document.getElementById("btnHeading");
let btnColor = document.getElementById("btnColor");
let btnFont = document.getElementById("btnFont");
let btnToggle = document.getElementById("btnToggle");

btnHeading.addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter some text!");
    }
});

btnColor.addEventListener("click", function () {
    let colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lavender"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

btnFont.addEventListener("click", function () {
    let currentSize = window.getComputedStyle(para).fontSize;
    let newSize = parseFloat(currentSize) + 2;
    para.style.fontSize = newSize + "px";
});

btnToggle.addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});