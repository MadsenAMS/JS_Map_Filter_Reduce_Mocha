class ArrayManager{
    MapAndDoubleArray(inputArray){
        return inputArray.map(item => item * 2);
    }

    FilterAndReturnEvenArray(inputArray){
        return inputArray.filter(item => item%2 == 0);
    }

    ReduceAndReturnArraySum(inputArray){
        return inputArray.reduce((acumulador, item) => acumulador += item);
    }
}

module.exports = ArrayManager;