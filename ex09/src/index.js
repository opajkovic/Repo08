function randomInteger() {
    return parseInt((Math.floor(Math.random() * 30)).toFixed(0));
}

console.log(randomInteger());
module.exports = randomInteger;