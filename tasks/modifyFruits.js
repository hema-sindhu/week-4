const favoriteFruits = ['Mango', 'Banana', 'Apple', 'Orange', 'Grapes'];

const firstFruit = favoriteFruits[0];
const lastFruit = favoriteFruits[favoriteFruits.length - 1];

favoriteFruits[1] = 'Strawberry';

console.log('First fruit:', firstFruit);          
console.log('Last fruit:', lastFruit);            
console.log('Modified fruits array:', favoriteFruits); 
