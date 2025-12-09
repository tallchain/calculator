//Calculations
let int1
let int2
let operator
function add(a, b) {
    console.log(a+b)
}
function subtract(a, b) {
    console.log(a-b)
}
function multiply(a, b) {
    console.log(a*b)
}
function divide(a, b) {
    console.log(a/b)
}
function operate(int1, int2, op){
    if (op == "+") {add(int1,int2)}
    else if (op == "-") {subtract(int1,int2)}
    else if (op == "*") {multiply(int1, int2)}
    else if (op == "/") {divide(int1,int2)}
    else return("error")
}

//Manipulating DOM
let container = document.querySelector(".container")
let selectButton = document.querySelector(".button")
let calcDisplay = document.querySelector(".calcDisplay")
let clear = document.querySelector(".clear")
//Creating buttons
for (let makeButtonNum = 0; makeButtonNum < 10; makeButtonNum++) {
    let createButton = document.createElement("button")
    createButton.textContent = makeButtonNum;
    createButton.classList.add("button");
    createButton.addEventListener("click", () => {calcDisplay.textContent = (makeButtonNum)})
    container.appendChild(createButton);
}
clear.addEventListener("click", () => calcDisplay.textContent = "")

