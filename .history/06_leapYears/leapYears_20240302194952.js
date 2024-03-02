const leapYears = function(yearNum) {
    if (yearNum % 4 === 0 && yearNum % 100 !== 0) {
        return true;
    } else if (yearNum % 100 === 0 && yearNum % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;