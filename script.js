let display = 0;
let numberOfOperations = 0;


const displayScreen = document.querySelector(".res");
displayScreen.textContent = display;

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    const num = number.dataset.num;
    number.onclick = function(){
        if(display.length > 15){
            display = "ERROR";
            displayScreen.textContent = display;
            return;
        }
        if(display == "ERROR" || display == "0" || display == "Infinity" || display == Infinity)
            display = "";
        display += num;
        displayScreen.textContent = display;
    }
}

function isNumber(c){
    if(c >= '0' && c <= '9')
        return true;
    return false;
}

for(let i = 0; i < operations.length; i++){
    const op = operations[i];
    op.onclick = function(){
        if(isNumber(display.charAt(display.length - 1))){
            if(numberOfOperations != 0){
                showResult();
                numberOfOperations = 0;
            }
            numberOfOperations++;
            display += op.dataset.op;
            displayScreen.textContent = display;
        }
    }
}

function clearDisplay(){
    display = 0;
    displayScreen.textContent = display;
    numberOfOperations = 0;
}

function showResult(){
    numberOfOperations--;
    let start = 0;
    let operationSign = '';
    let num1 = display.charAt(0);
    let num2 = "";
    for(let i = 1; i < display.length; i++){
        if(!isNumber(display.charAt(i)) && display.charAt(i) != '.')
        {
            start = i+1;
            operationSign = display.charAt(i);
            break;
        }
        num1 += display.charAt(i);
    }
    for(let i = start; i < display.length; i++){
        num2 += display.charAt(i);
    }
    if(operationSign == '')
    {
        display = num1;
        displayScreen.textContent = display;
    }
    else if(!num2){
        display = num1;
        displayScreen.textContent = display;
    }
    else{
        display = operate(operationSign, Number(num1), Number(num2));
        displayScreen.textContent = display;
    }
}


function operate(operation, num1, num2){
    let result = 0;
    if(operation == "add" || operation == '+')
        result = num1 + num2;
    if(operation == "subtract" || operation == '-')
        result = num1 - num2;
    if(operation == "multiply" || operation == 'x')
        result = num1 * num2;
    if(operation == "divide" || operation == '÷')
        result = num1 / num2;
    return (Math.round(result * 100) / 100).toString(10);
}

