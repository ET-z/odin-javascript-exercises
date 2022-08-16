const repeatString = function(string, num) {
    let finalString = "";
    let i = 0;
    if (num < 0) {
        finalString = "ERROR";
    } else {
        while (i < num) {
            finalString += string;
            i++;
        }
    }
    return finalString;
}
// Do not edit below this line
module.exports = repeatString;
