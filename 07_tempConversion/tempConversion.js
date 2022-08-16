const ftoc = function(f) {
    let c = (f - 32) * (5/9);
    let convert = Math.round(c * 10) / 10;
    return convert;
};

const ctof = function(c) {
    let f = c * (9/5) + 32;
    let convert = Math.round(f * 10) / 10;
    return convert;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
