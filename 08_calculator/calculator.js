const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};