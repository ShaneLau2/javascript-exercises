const sumAll = function(sumStart, sumEnd) {
    let sumNum = 0;
    const sumByOrder = function(sumSmall, sumBig) {
        for (let i = sumSmall; i <= sumBig; i++) {
            sumNum += i;
        }
    };
    if (sumStart <= sumEnd) {}
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;