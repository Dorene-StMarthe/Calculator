
function add(firstNum, secondNum){
    let sum = firstNum + secondNum;
    return sum;
}
//console.log(add(3,2))

function subtract(firstNum, secondNum){
    let difference = firstNum - secondNum;
    return difference
}
//console.log(subtract(3,2))

function multiply(firstNum, secondNum){
    let product = firstNum * secondNum;
    return product;
}
//console.log(multiply(3,2))

function divide(firstNum, secondNum){
    let quotient = firstNum / secondNum;
    return quotient;
}
//console.log(divide(3,2))

operator = '+'

function calculate (num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }else if (operator === '-') {
        return subtract(num1, num2);
    }else if (operator === '*') {
        return multiply(num1, num2);
    }else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return "Error: " ;
    }
}
//console.log(calculate(8,"*",9))

let displayValue = "";

function appendNumber(number){
    displayValue += number; //converts display string to number
    updateDisplay();
}

function updateDisplay(){
    document.querySelector('.display').textContent = displayValue;
}

updateDisplay();