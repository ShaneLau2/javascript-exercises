const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    const resultFibo = num === 1 ? 1 : fibonacci(num - 2) + fibonacci(num - 1);
    return resultFibo;
};

// Do not edit below this line
module.exports = fibonacci;