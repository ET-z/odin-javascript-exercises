const removeFromArray = function(array, ...removeItem) {
    let i = 0;
    for (i of removeItem) {
        if (array.includes(i)) {
            let index = array.indexOf(i);
            array.splice(index, 1);
        } else if (!array.includes(i)) {
            continue;
        } else {
            continue;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
