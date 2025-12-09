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
const container = document.querySelector(".container")
const selectButton = document.querySelector(".button")
const calcDisplay = document.querySelector(".calcDisplay")
const clear = document.querySelector(".clear")

//Creating buttons
const buttonText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "+", '-', '*', '/']
buttonText.forEach((item) => {
    const createNumButton = document.createElement("button")
    createNumButton.textContent = item;
    createNumButton.classList.add("button");
    createNumButton.addEventListener("click", () => {calcDisplay.textContent += (item)})
    container.appendChild(createNumButton);
})
clear.addEventListener("click", () => calcDisplay.textContent = "")

