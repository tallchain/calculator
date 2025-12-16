//Calculations
let int1 = undefined
let int2= undefined
let operator = undefined

function displayOperationToCalcDisplay (number) {
    calcDisplay.textContent = Math.round((number + Number.EPSILON) * 100) / 100
    assignIntFromCalcDisplay()
}
function add(a, b) {
    let number = (parseFloat(a) + parseFloat(b));
    displayOperationToCalcDisplay(number)
}
function subtract(a, b) {
    let number = (a - b)
    displayOperationToCalcDisplay(number)

}
function multiply(a, b) {
   let number = (a * b)
    displayOperationToCalcDisplay(number)

}
function divide(a, b) {
    if (b == 0) {calcDisplay.textContent = "You can't divide by 0, silly goose."}
    else {let number = (a / b);
    displayOperationToCalcDisplay(number)
    }
}
function assignIntFromCalcDisplay() {int1 = calcDisplay.textContent}
function findOperation(operator) {
    if (int2 == undefined){return}
    else if (operator == "+") {add(int1,int2)}
    else if (operator == "-") {subtract(int1,int2)}
    else if (operator == "*") {multiply(int1, int2)}
    else if (operator == "/") {divide(int1,int2)}
    else return("error")
}

//Manipulating DOM
const container = document.querySelector(".container")
const selectButton = document.querySelector(".button")
const calcDisplay = document.querySelector(".calcDisplay")
const clear = document.querySelector(".clear")
const equalSign = document.querySelector(".equalSign")
const numberButtonContainer = document.querySelector(".numberButtonContainer")

//Creating buttons
const buttonText = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ".", "+", '-', '*', '/']
buttonText.forEach((clickedButton) => {
    const createButton = document.createElement("button")
    createButton.textContent = clickedButton;
    createButton.classList.add("button");
    createButton.addEventListener("click", () => {
    if (clickedButton == "+" || clickedButton == "-" || clickedButton == "*" || clickedButton == "/")
        if (operator == undefined) {
            int1 = calcDisplay.textContent;
            operator = clickedButton;
        } 
        else {
            removeInt2AfterOperation();
            operator = clickedButton;
        }
    else if (clickedButton == "." && calcDisplay.textContent.includes(".")) {
        return
    }
    else if (int1 != undefined && int2 == undefined) { 
        calcDisplay.textContent = clickedButton;
        int2 = calcDisplay.textContent;
    }
    else if (int2 != undefined) {
        calcDisplay.textContent += clickedButton;
        int2 = calcDisplay.textContent
    }
    else {calcDisplay.textContent += clickedButton}
    })
    numberButtonContainer.appendChild(createButton);
})

clear.addEventListener("click", () => {calcDisplay.textContent = ""; 
    operator = undefined; 
    int1 = undefined; 
    int2 = undefined;
})
equalSign.addEventListener("click", () => {
    removeInt2AfterOperation();
    operator = undefined;
    })
document.addEventListener("keypress", (e) => { 
    calcDisplay.textContent += e.key
    })
function removeInt2AfterOperation() {    
        findOperation(operator);
        int2 = undefined
    }

    