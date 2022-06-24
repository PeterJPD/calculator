function sum(number1, number2){
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    return number1 / number2
}

function operate(firstNumber, secondNumber, operator){
    number1=Number(firstNumber)
    number2=Number(secondNumber)
    

    if(operator==="+"){
        return sum(number1, number2)
    }
    else if(operator==="-"){
        return subtract(number1, number2)

    }else if(operator==="x"){
        return multiply(number1, number2)
        
    }else if(operator==="/"){
        return divide(number1, number2)
    }
}

function calculate(){
        OperationResult =  operate(firstNumber, secondNumber, currentOperator)
        // result = Math.round(OperationResult * 100) / 100
        resultNumber =  result = Math.round(OperationResult * 100) / 100
        result = resultNumber.toString()

}


//variables
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operations')
const equalButton = document.querySelector('#equal')
const currentOperationDisplay = document.querySelector('#currentOperationDisplay')
const lastOperationDisplay = document.querySelector('#lastOperationDisplay')
const clearButton = document.querySelector('#clear')
const pointButton = document.querySelector('#point')
const eraseButton = document.querySelector('#erase')

let firstNumber = ""
let secondNumber = ""
let currentOperator = null
let currentOPeration = ""
let lastOperation = ""
let result
let hasPoint = false


//eventlisteners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        addNumber(button.textContent)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        addOperator(button.textContent)
    })
})

equalButton.addEventListener('click', () => {
    calculate(firstNumber, secondNumber, currentOperator)
    if(currentOperator === "/" && secondNumber === "0"){
        currentOperationDisplay.textContent = "can't divide by 0"
    }else{
        showResultInDisplay()
    }
    resetVariables()
})

clearButton.addEventListener('click', () => {
    clearDisplay(currentOperationDisplay)
    clearDisplay(lastOperationDisplay)
    resetVariables()

})

pointButton.addEventListener('click', () => {
    if(hasPoint === false){
        addNumber(pointButton.textContent)
        hasPoint = true
    }else{
        return
    }
})

eraseButton.addEventListener('click', () =>{
    currentOPerationLastCharSlice =  currentOPeration.slice(0, -1)
    currentOPeration = currentOPerationLastCharSlice
    currentOperationDisplay.textContent = currentOPeration

    if(currentOperator === null){
        firstNumberLastCharSlice = firstNumber.slice(0, -1)
        firstNumber = firstNumberLastCharSlice
        console.log(`first number = ${firstNumber}`)

    }else if (currentOperator !== null && secondNumber === ""){
        currentOperator= null
        console.log(`current operator = ${currentOperator}`)
    } else if (currentOperator !==null && secondNumber !== ""){
        secondNumberSlice = secondNumber.slice(0, -1)
        secondNumber = secondNumberSlice
        console.log(`second number = ${secondNumber}`)
    }    
})



//functions

function addNumber(number){
    if(currentOperationDisplay.textContent === "0" || currentOperationDisplay.textContent === "can't divide by 0" || currentOperationDisplay.textContent === "NaN"){
        currentOperationDisplay.textContent = ""
    }
    if(currentOperator=== null){
        currentOperationDisplay.textContent += number
        firstNumber+=number
        currentOPeration+=number
        console.log(`first number = ${firstNumber}`)

    }else if(currentOperationDisplay.textContent === `${result}`){
        currentOperationDisplay.textContent += number
        secondNumber+=number
        currentOPeration+=number
        console.log(`second number = ${secondNumber}`)
    }
    else if (currentOperator!== null){
        currentOperationDisplay.textContent += number
        secondNumber+=number
        currentOPeration+=number
        console.log(`second number = ${secondNumber}`)

    }
}

function addOperator(operator){
    if (currentOperator===null){ //if it is first operation
    currentOperationDisplay.textContent +=operator

    currentOperator=operator
    currentOPeration+=operator

} else{ //if it isn't first operation
    //1 -> calculate firstnumber, secondnumber, operator with calculate () and store in lastoperation
    
    calculate(firstNumber, secondNumber, currentOperator)

    if(currentOperator === "/" && secondNumber === "0"){
        currentOperationDisplay.textContent = "can't divide by 0"
        resetVariables()
    } else{
    currentOperationDisplay.textContent = result
    //2 reassign variables
    firstNumber=result
    secondNumber=""
    currentOperator=operator
    currentOperationDisplay.textContent+=currentOperator

    currentOPeration=`${result}${currentOperator}`

    }
}
console.log(currentOperator)
}

function clearDisplay(display){
    if(display.textContent==="0"){
        display.textContent=""
    }else if(display.textContent===""){
        return
    }else{
        display.textContent="0"
    }
}

function showResultInDisplay(){
    currentOperationDisplay.textContent = result
}

function resetVariables(){
    firstNumber = ""
    secondNumber = ""
    currentOperator = null
    currentOPeration = ""
    lastOperation = ""
    result = ""
}




//IF DISPLAY IS IN NaN -> CANT ADD OPERATORS OR POINTS

//if displays show result after equal button being pressed -> should restart calc
//display being substituied by new first number