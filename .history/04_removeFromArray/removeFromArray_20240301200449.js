const removeFromArray = function(arr = []) {
    console.log(arr);
    let args = Array.from(arr);
    args.shift();
    return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;