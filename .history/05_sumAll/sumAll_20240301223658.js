const sumAll = function(sumStart, sumEnd) {
    let sumNum = 0;
    const sumByOrder = function(sumSmall, sumBig) {
        for (let i = sumSmall; i <= sumBig; i++) {
            sumNum += i;
        }
        return sumNum;
    };
    if (sumStart <= sumEnd) {
        return sumByOrder(sumStart, sumEnd);
    } else return sumByOrder(sumEnd, sumStart);
};

// Do not edit below this line
module.exports = sumAll;