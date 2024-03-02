const sumAll = function(sumStart, sumEnd) {
    if (sumStart < 0 || sumEnd < 0) {
        return "ERROR";
    } else if (typeof sumStart != "number" || typeof sumEnd != "number") {
        return "ERROR";
    }
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