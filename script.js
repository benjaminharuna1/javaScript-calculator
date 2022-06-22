alert("Welcome to my calculator")

// // checking if the input is valid

const mathType = prompt('Enter mathType ( either +, -, *, / or % ): ');


while(mathType !== "+" && mathType !== "-" && mathType !== "*" && mathType !== "/" && mathType !== "%"){
    mathType = prompt ("invalid input enter an mathType!!! Enter your mathType + for additon, - for subtraction, * for multriplication ,/ for division and % for modulus"
    );
}

// take the operand input
const x = parseFloat(prompt('Enter first number: '));
const y = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (mathType == '+') {
    result = x + y;
}
else if (mathType == '-') {
    result = x - y;
}
else if (mathType == '*') {
    result = x * y;
}
else if (mathType == '/') {
    result = x / y;
}
else {
    result = x % y;
}

// display the result
console.log(`${x} ${mathType} ${y} = ${result}`);