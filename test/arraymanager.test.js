const assert = require ('assert');
const ArrayManager = require ('../assets/js/arraymanager');

describe('ArrayManager', function(){
    //Arrange
    const arrayManager = new ArrayManager();
    const inputArray = [1,2,3,4,5,6,7,8,9,10]
    
    it('Doubles Value in Array', function(){
        //Arrange
        targetArray = [2,4,6,8,10,12,14,16,18,20];
        //Act
        let outputArray = arrayManager.MapAndDoubleArray(inputArray);
        //Assert
        assert.equal(outputArray.toString(), targetArray.toString());
    });

    it('Returns Even Numbers in Array', function(){
        //Arrange
        targetArray = [2,4,6,8,10];
        //Act
        let outputArray = arrayManager.FilterAndReturnEvenArray(inputArray);
        //Assert
        assert.equal(outputArray.toString(), targetArray.toString())
    });

    it('Returns Sum of Array Numbers', function(){
        //Arrange
        targetValue = 55;
        //Act
        let outputArray = arrayManager.ReduceAndReturnArraySum(inputArray);
        //Assert
        assert.equal(outputArray.toString(), targetValue.toString());
    });

})