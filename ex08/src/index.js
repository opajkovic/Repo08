var total = 0;

function funcWithArg(digit) {
    return (digit + 9) / 5;
}
total = funcWithArg(3);
console.log(total);
module.exports = funcWithArg;