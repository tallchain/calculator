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
    if (b=0) {calcDisplay.textContent = "You can't divide by 0, silly goose."}
    else {calcDisplay.textContent = (a / b)}
}
function operate(op) {
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
const buttonText = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "+", '-', '*', '/']
buttonText.forEach((item) => {
    const createNumButton = document.createElement("button")
    createNumButton.textContent = item;
    createNumButton.classList.add("button");
    createNumButton.addEventListener("click", () => {
        if (item == "+" || item == "-" || item == "*" || item == "/"){
            op = item;
            int1 = calcDisplay.textContent
            calcDisplay.textContent = ""
            console.log(int1)
        } else {calcDisplay.textContent += (item)
        }})
    container.appendChild(createNumButton);
})
clear.addEventListener("click", () => calcDisplay.textContent = "")
equalSign.addEventListener("click", () => {int2 = calcDisplay.textContent;
    console.log(int2);
    operate(op);})
//const operators = ("+" || "-" || "*" || "/")
