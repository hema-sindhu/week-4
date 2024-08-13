const a = true;
const b = false;

const andOperation = a && b;
const orOperation = a || b;
const notA = !a;
const notB = !b;
const combinedOperation1 = (a && b) || (!a && b);
const combinedOperation2 = (a || b) && (a || !b);

// Print results
console.log(`a && b: ${andOperation}`);                  // false
console.log(`a || b: ${orOperation}`);                   // true
console.log(`!a: ${notA}`);                              // false
console.log(`!b: ${notB}`);                              // true
console.log(`(a && b) || (!a && b): ${combinedOperation1}`); // false
console.log(`(a || b) && (a || !b): ${combinedOperation2}`); // true
