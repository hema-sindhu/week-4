function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

const num1 = 10;
const num2 = -5;
const num3 = 0;

checkNumber(num1); // 10 is positive.
checkNumber(num2); // -5 is negative.
checkNumber(num3); // 0 is zero.
