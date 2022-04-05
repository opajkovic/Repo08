var sum = 0;

function addThree() {
    sum = sum + 3;
    return sum;
}

function addFive(){
    sum = sum + 5;
    return sum;
}

console.log(addThree());
console.log(addFive());
addThree();
addFive();
module.exports = {
    addThree,
    addFive
};