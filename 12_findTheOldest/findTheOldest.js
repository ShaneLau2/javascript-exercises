const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let currentAge;
        if (!currentPerson.yearOfDeath) {
            currentAge = new Date().getFullYear() - currentPerson.yearOfBirth;
        } else {
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        if (!oldest) {
            oldest = { name: currentPerson.name, year: currentAge };
        }
        if (currentAge > oldest.year) {
            oldest = { name: currentPerson.name, year: currentAge };
        }
        return oldest;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;