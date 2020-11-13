function clear() {
    document.getElementById("lower-result").value = ""
}

function display() {
    document.getElementById("lower-result").value += this
}

function solve() {
    const operation = document.getElementById("lower-result").value
    const numbers = operation.split(/[-\+]/) // [] pour "ou"
    const operators = operation.split(/\d/).filter(function(element){return element != ""})
    // d pour decimals et operators.filter(element => element != "")
    let i;
    for (i = 0; i < operators.length; i++) {
        if (i=="x");
}
    //operation = [[1;4;52][+;-]]
    document.getElementById("upper-result").value = operation

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
document.getElementById("button-delete").addEventListener("click", clear)
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
