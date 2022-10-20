function Algo() {}

Algo.prototype.reverse = function (str) {
    return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function (str) {
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
};

Algo.prototype.capitalize = function (str) {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        const lowerSubStr = splitStr[i].toLowerCase();
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + lowerSubStr.slice(1);
    }
    return splitStr.join(' ');
};

module.exports = Algo;
