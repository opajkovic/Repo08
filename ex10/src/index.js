function convertStrToInt(str) {
    return parseInt(str);
}
console.log(typeof(convertStrToInt("44")));
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));
module.exports = convertStrToInt;