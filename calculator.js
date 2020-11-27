function clear() {
    document.getElementById("lower-result").value = "";
    document.getElementById("upper-result").value = ""
}

function remove_last_item() {
    const newValue = document.getElementById("lower-result").value.slice(0, -1);
    document.getElementById("lower-result").value = newValue
}

function display(event) {
    console.log(event);
    document.getElementById("lower-result").value += event.target.innerText // un div n'a pas de value, il faut faire innerHTML
}

function solve() {
    const operation = document.getElementById("lower-result").value;
    const numbers = operation.split(/[-\+]/); // [] pour "ou"
    const operators = operation.split(/\d/).filter(function (element) {
        return element != ""
    });
    // d pour decimals et operators.filter(element => element != "")
    let result = 0;
    let priorityPosition = [];
    operators.forEach(function(operator, index ){
        if (operator == "x" || operator =="÷") {
            priorityPosition.push(index)
        }
    }
    );
    // numbers = [1;3;9;2]
    // operators = [+;x;/;-]
    // priorityPosition = [2;3]
    while (operators.length > 0) {
        while (priorityPosition.length > 0) {
            let position = parseInt(priorityPosition[0]);
            let firstPriorityOperator = operators[position];
            if (firstPriorityOperator == "x") {
                result = multiply(numbers[position], numbers[position + 1]);
                numbers[position] = result;
                numbers.splice(position, 1);
                if (priorityPosition.length == 0) {operators.splice(0,1)}
                operators.splice(position - 1, 1); //position -1 = problème ?
                priorityPosition.splice(0, 1)
            } else if (firstPriorityOperator == "÷") {
                result = divide(numbers[position], numbers[position + 1]);
                numbers[position] = result;
                numbers.splice(position, 1);
                if (priorityPosition.length == 0) {operators.splice(0,1)}
                operators.splice(position - 1, 1);
                priorityPosition.splice(0, 1)
            }
        }
        // while (operators.includes("x") || operators.includes("÷")) {}
        let firstOperator = operators[0];
        if (firstOperator == "+") {
            result = add(parseInt(numbers[0]), parseInt(numbers[1]));// 1+3
            numbers[0] = result;
            numbers.splice(1, 1);
            operators.splice(0, 1)
        } else if (firstOperator == "-") {
            result = subtract(parseInt(numbers[0]), parseInt(numbers[1]));// 1+3
            numbers[0] = result;
            numbers.splice(1, 1);
            operators.splice(0, 1);
        }
    }

    document.getElementById("upper-result").value = numbers[0];
    document.getElementById("lower-result").value = ""
}


function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}


document.getElementById("ac-button").addEventListener("click", clear)
document.getElementById("button-delete").addEventListener("click", remove_last_item)
document.getElementById("button-division").addEventListener("click", display)
document.getElementById("button-1").addEventListener("click", display)
document.getElementById("button-2").addEventListener("click", display)
document.getElementById("button-3").addEventListener("click", display)
document.getElementById("button-multiplication").addEventListener("click", display)
document.getElementById("button-4").addEventListener("click", display)
document.getElementById("button-5").addEventListener("click", display)
document.getElementById("button-6").addEventListener("click", display)
document.getElementById("button-subtraction").addEventListener("click", display)
document.getElementById("button-7").addEventListener("click", display)
document.getElementById("button-8").addEventListener("click", display)
document.getElementById("button-9").addEventListener("click", display)
document.getElementById("button-addition").addEventListener("click", display)
document.getElementById("button-comma").addEventListener("click", display)
document.getElementById("button-0").addEventListener("click", display)
document.getElementById("button-equal").addEventListener("click", solve)
