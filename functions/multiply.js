function multiply(a, b) {
    return a * b;
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let result = multiply(num1, num2);

document.write("Multiplication Result: " + result);