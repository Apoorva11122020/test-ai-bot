function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}

var unusedVar = 'never used';

function fetchData() {
    fetch('https://api.example.com/data')
        .then(res => res.json())
        .then(data => console.log(data));
}
console.log('This is a test bot for cleaning up code.');