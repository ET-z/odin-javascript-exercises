// Leap Years are divisibe by 4
// Years divisible by 100 are not Leap Years
//  ~ Unless it is divisible by 400

const leapYears = function(year) {
    let message;
    if (year % 100 === 0) {
        if (year % 400 === 0 && year % 4 === 0) {
            message = true;
        } else {
            message = false;
        }
    } else if (year % 4 === 0) {
        message = true;
    } else {
        message = false;
    }

    return message;
};

// Do not edit below this line
module.exports = leapYears;
