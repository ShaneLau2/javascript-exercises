const removeFromArray = function(arr) {
    let args = Array.from(arr);
    args.shift();
    return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
export default removeFromArray;