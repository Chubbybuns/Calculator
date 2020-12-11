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

function operate(numbers, operators, index, operationFunction) {
    const result = operationFunction(numbers[index], numbers[index + 1]);
    numbers[index] = result;
    numbers.splice(index + 1, 1);
    operators.splice(index, 1);
    return result

}

function findNextOperatorWithIndex(operators) {
    const firstMulti = operators.indexOf("x");
    if (firstMulti !== -1) {
        return {"operator": "x", "operatorIndex": firstMulti}
    }
    const firstDivision = operators.indexOf("÷");
    if (firstDivision !== -1) {
        return {"operator": "÷", "operatorIndex": firstDivision}
    }
    return {"operator": operators[0], "operatorIndex": 0};
}

function solve() {
    const operation = document.getElementById("lower-result").value;
    const numbers = operation.split(/[-\+x÷]/).map(number => parseFloat(number)); // [] pour "ou"
    const operators = operation.split(/\d/).filter(function (element) {
        return element !== ""
    });
    // d pour decimals et operators.filter(element => element != "")
    let result = 0;
    while (operators.length > 0) {
        let nextOperatorWithIndex = findNextOperatorWithIndex(operators);
        let nextOperator = nextOperatorWithIndex["operator"];
        let nextIndex = nextOperatorWithIndex["operatorIndex"];
        let operationFunction;
        if (nextOperator === "x") {
            operationFunction = multiply
        } else if (nextOperator === "÷") {
            operationFunction = divide
        } else if (nextOperator === "+") {
            operationFunction = add
        } else if (nextOperator === "-") {
            operationFunction = subtract
        }
        result = operate(numbers, operators, nextIndex, operationFunction);
    }

    document.getElementById("upper-result").value = result;
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
