function testNumString(string) {
    const numRegEx = /[0-9]/;
    return numRegEx.test(string) ? -parseInt(string) : NaN;
}

console.log(testNumString('1'));
console.log(testNumString('10'));
console.log(testNumString('cow'));
console.log(testNumString('15'));

module.exports = testNumString;
