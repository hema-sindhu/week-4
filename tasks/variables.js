function varExample() {
    var x = 1;
    if (true) {
        var x = 2; 
        console.log("Inside if block (var):", x); // 2
    }
    console.log("Outside if block (var):", x); // 2
}
varExample();
function letExample() {
    let y = 1;
    if (true) {
        let y = 2; 
        console.log("Inside if block (let):", y); // 2
    }
    console.log("Outside if block (let):", y); // 1
}
letExample();

function constExample() {
    const z = 1;
    if (true) {
        const z = 2; 
        console.log("Inside if block (const):", z); // 2
    }
    console.log("Outside if block (const):", z); // 1
}
constExample();

var a = 10;
console.log("Initial value of a (var):", a); // 10
a = 20;
console.log("Reassigned value of a (var):", a); // 20

let b = 10;
console.log("Initial value of b (let):", b); // 10
b = 20;
console.log("Reassigned value of b (let):", b); // 20

const c = 10;
console.log("Initial value of c (const):", c); // 10

