function convertToInt(str) {
    return parseInt(str, 16);
}
console.log(typeof(convertToInt("BA")));
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
typeof(convertToInt("BA"));
convertToInt("BA");
convertToInt("F1");
convertToInt("JeffBezos");
module.exports = convertToInt;