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

function nonPriorityOperation(numbers, operators, operationFunction) {
    const result = operationFunction(parseFloat(numbers[0]), parseFloat(numbers[1]));
    numbers[0] = result;
    numbers.splice(1, 1);
    operators.splice(0, 1);
    return result
}

function priorityOperation(numbers, operators, position, priorityPositions, operationFunction){
    const result = operationFunction(numbers[position], numbers[position + 1]);
    numbers[position] = result;
    numbers.splice(position + 1, 1);
    operators.splice(position, 1);
    priorityPositions.splice(0, 1);
    priorityPositions = priorityPositions.map(function (priorityOperator) {
        return priorityOperator - 1
    });
    return {"result": result, "priorityPositions": priorityPositions}
}
function solve() {
    const operation = document.getElementById("lower-result").value;
    const numbers = operation.split(/[-\+x÷]/); // [] pour "ou"
    const operators = operation.split(/\d/).filter(function (element) {
        return element !== ""
    });
    // d pour decimals et operators.filter(element => element != "")
    let result = 0;
    let priorityPositions = [];
    operators.forEach(function(operator, index ){
        if (operator === "x" || operator ==="÷") {
            priorityPositions.push(index)
        }
    }
    );

    while (operators.length > 0) {
        while (priorityPositions.length > 0) {
            let position = priorityPositions[0];
            let firstPriorityOperator = operators[position];
            let resultAndPriorityPositions;
            if (firstPriorityOperator === "x") {
                resultAndPriorityPositions = priorityOperation(numbers, operators, position, priorityPositions, multiply);
            } else if (firstPriorityOperator === "÷") {
               resultAndPriorityPositions = priorityOperation(numbers, operators, position, priorityPositions, divide);
            }
            result = resultAndPriorityPositions["result"];
            priorityPositions = resultAndPriorityPositions["priorityPositions"]
        }
        let firstOperator = operators[0];
        if (firstOperator === "+") {
            result = nonPriorityOperation(numbers, operators, add)
        } else if (firstOperator === "-") {
            result = nonPriorityOperation(numbers, operators, subtract)
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


document.getElementById("ac-button").addEventListener("click", clear);
document.getElementById("button-delete").addEventListener("click", remove_last_item);
document.getElementById("button-division").addEventListener("click", display);
document.getElementById("button-1").addEventListener("click", display);
document.getElementById("button-2").addEventListener("click", display);
document.getElementById("button-3").addEventListener("click", display);
document.getElementById("button-multiplication").addEventListener("click", display);
document.getElementById("button-4").addEventListener("click", display);
document.getElementById("button-5").addEventListener("click", display);
document.getElementById("button-6").addEventListener("click", display);
document.getElementById("button-subtraction").addEventListener("click", display);
document.getElementById("button-7").addEventListener("click", display);
document.getElementById("button-8").addEventListener("click", display);
document.getElementById("button-9").addEventListener("click", display);
document.getElementById("button-addition").addEventListener("click", display);
document.getElementById("button-comma").addEventListener("click", display);
document.getElementById("button-0").addEventListener("click", display);
document.getElementById("button-equal").addEventListener("click", solve);
