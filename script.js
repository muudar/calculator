let display = 0;
const displayScreen = document.querySelector(".res");
displayScreen.textContent = display;

const numbers = document.querySelectorAll(".number");

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    number.onclick = function(){
        if(display == "0")
            display = "";
        display += number.textContent;
        displayScreen.textContent = display;
    }
}

function clearDisplay(){
    display = 0;
    displayScreen.textContent = display;
}




function operate(operation, num1, num2){
    let result = 0;
    if(operation == "add")
        result = num1 + num2;
    if(operation == "subtract")
        result = num1 - num2;
    if(operation == "multiply")
        result = num1 * num2;
    if(operation == "divide")
        result = num1 / num2;
    return Math.round(result * 100) / 100;
}

