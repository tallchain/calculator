//Calculations
let int1
let int2
let operator
function add(a, b) {
    calcDisplay.textContent = (parseFloat(a) + parseFloat(b))
}
function subtract(a, b) {
    calcDisplay.textContent = (a - b)
}
function multiply(a, b) {
    calcDisplay.textContent = (a * b)
}
function divide(a, b) {
    calcDisplay.textContent = (a / b)
}
function operate(text) {
    if (text.includes("*")) {
        op = "*"}
        else if (text.includes("+")) {
            op = "+"
    } else if (text.includes("/")) {
        op = "/"
    } else if (text.includes("-")) {
        op = "-"
    }
    let array = text.split(op);
    let int1 = array[0];
    let int2 = array[1];
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
const equalSign = document.querySelector(".equalSign")

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
equalSign.addEventListener("click", () => operate(calcDisplay.textContent))
//const operators = ("+" || "-" || "*" || "/")
