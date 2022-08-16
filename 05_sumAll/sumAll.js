const sumAll = function(num1, num2) {
    let smallNum;
    let largeNum;
    if (num1 < num2) {
        smallNum = num1;
        largeNum = num2;
    } else {
        smallNum = num2;
        largeNum = num1;
    }

    let errorMessage = "ERROR";
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return errorMessage;
    } else if (num1 > 0 && num2 > 0) {
        let sum = 0;
        let i = 0;
        while (i < largeNum) {
            sum += smallNum;
            smallNum += 1; 
            i++
        }
        return sum;
    } else {
        return errorMessage;
    }
};

// Do not edit below this line
module.exports = sumAll;
