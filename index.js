const ArrayManager = require ('./assets/js/arraymanager');
const arrayManager = new ArrayManager();
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mappedArray = arrayManager.MapAndDoubleArray(initialArray);
const filteredArray = arrayManager.FilterAndReturnEvenArray(initialArray);
const reducedArray = arrayManager.ReduceAndReturnArraySum(initialArray);

console.log(`Initial Array = ${initialArray}`);
console.log(`Mapped Array = ${mappedArray}`);
console.log(`Filtered Array = ${filteredArray}`);
console.log(`Reduced Array = ${reducedArray}`);
