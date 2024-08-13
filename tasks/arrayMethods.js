const favoriteFruits = ['Mango', 'Banana', 'Apple', 'Orange', 'Grapes'];

favoriteFruits.push('Pineapple');
console.log('After push:', favoriteFruits);

const poppedFruit = favoriteFruits.pop();
console.log('After pop:', favoriteFruits);
console.log('Popped fruit:', poppedFruit);

const shiftedFruit = favoriteFruits.shift();
console.log('After shift:', favoriteFruits);
console.log('Shifted fruit:', shiftedFruit);

favoriteFruits.unshift('Kiwi');
console.log('After unshift:', favoriteFruits);
