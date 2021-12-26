const ArrayManager = require ('./assets/js/arraymanager');
const arrayManager = new ArrayManager();
const initialArray = [1, 5, 17, 23, 22, 17, 08];

const mappedArray = arrayManager.MapAndDoubleArray(initialArray);
const filteredArray = arrayManager.FilterAndReturnEvenArray(initialArray);
const reducedArray = arrayManager.ReduceAndReturnArraySum(initialArray);
console.log("\nInitial array is [1, 5, 17, 23, 22, 17, 08].\nMapped array uses 'map' to double each number in array.\nFiltered Array returns only even numbers using 'filter'.\nReduced Array returns sum of numbers in array using 'reduce'.\n\n")
console.log(`Initial Array = ${initialArray}`);
console.log(`Mapped Array = ${mappedArray}`);
console.log(`Filtered Array = ${filteredArray}`);
console.log(`Reduced Array = ${reducedArray}\n`);
