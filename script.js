//Calculations
let int1 = undefined;
let int2= undefined;
let operator = undefined;

function displayOperationToCalcDisplay (number) {
    calcDisplayBottom.textContent = Math.round((number + Number.EPSILON) * 100) / 100;
    assignIntFromCalcDisplay();
}
function add(a, b) {
    let number = (parseFloat(a) + parseFloat(b));
    displayOperationToCalcDisplay(number);
}
function subtract(a, b) {
    let number = (a - b);
    displayOperationToCalcDisplay(number);

}
function multiply(a, b) {
   let number = (a * b);
    displayOperationToCalcDisplay(number);

}
function divide(a, b) {
    if (b == 0) {calcDisplayBottom.textContent = "You can't divide by 0, silly goose."}
    else {let number = (a / b);
    displayOperationToCalcDisplay(number);
    }
}
function assignIntFromCalcDisplay() {int1 = calcDisplayBottom.textContent}
function findOperation(operator) {
    if (int2 == undefined){return}
    else if (operator == "+") {add(int1,int2)}
    else if (operator == "-") {subtract(int1,int2)}
    else if (operator == "*") {multiply(int1, int2)}
    else if (operator == "/") {divide(int1,int2)}
    else return("error")
}

//Manipulating DOM
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer")
const numberButtons = document.querySelectorAll(".numberButton");
const numberButtonContainer = document.querySelector(".numberButtonContainer");
const clearButton = document.querySelector(".clearButton");
const equalButton = document.querySelector(".equalButton");
const calcDisplayTop = document.querySelector(".calcDisplayTop");
const calcDisplayBottom = document.querySelector(".calcDisplayBottom");

//Creating buttons
numberButtons.forEach((button) => {
    button.addEventListener("mouseup", (e) => addButtonEventListener(e.currentTarget.textContent))
});

function addButtonEventListener(clickedButton) { 
        if (clickedButton == "+" 
        || clickedButton == "-" 
        || clickedButton == "*" 
        || clickedButton == "/")
        if (operator == undefined) {
            int1 = calcDisplayBottom.textContent;
            operator = clickedButton;
        } 
        else {
            removeInt2AfterOperation();
            operator = clickedButton;
        }
    else if (clickedButton == "." 
        && calcDisplayBottom.textContent.includes(".")) {
        return
    }
    else if (int1 != undefined
        && int2 == undefined) { 
        calcDisplayBottom.textContent = clickedButton;
        int2 = calcDisplayBottom.textContent;
    }
    else if (int2 != undefined) {
        calcDisplayBottom.textContent += clickedButton;
        int2 = calcDisplayBottom.textContent;
    }
    else {calcDisplayBottom.textContent += clickedButton}
}
clearButton.addEventListener("click", clear)
function clear() {    
    calcDisplayBottom.textContent = ""; 
    operator = undefined; 
    int1 = undefined; 
    int2 = undefined}
equalButton.addEventListener("click", findResult)
function findResult() {
    removeInt2AfterOperation();
    operator = undefined;
}
document.addEventListener("keypress", (e) => {
    if (buttonText.includes(e.key))
        {addButtonEventListener(e.key)}
    else if (e.key == "Enter") {findResult()}
})
function removeInt2AfterOperation() {    
        findOperation(operator);
        int2 = undefined;
    }