'use strict';

function fizzBuzz(countTo) {
    var fizzBuzzArray = [];
    let i = 1;

    while (i <= countTo) {
        switch (i % 15) {

            case 0:
                fizzBuzzArray[i - 1] = "fizzbuzz";
                break;

            case 5:
            case 10:
                fizzBuzzArray[i - 1] = "buzz";
                break;

            case 3:
            case 6:
            case 9:
            case 12:
                fizzBuzzArray[i - 1] = "fizz";
                break;

            default:
                fizzBuzzArray[i - 1] = i;
                break;
        }
        i++;
    }
    console.log(fizzBuzzArray);
    return fizzBuzzArray;
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
    // we'll use the variables in our test cases
    const countTo = 16;
    const expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];

    const actual = fizzBuzz(countTo) || [];

    if (
        expected.length === actual.length &&
        expected.every(function(item, index) {
            return actual[index] === item;
        })) {

        console.log('SUCCESS: fizzBuzz is working');
    } else {
        console.log('FAILURE: fizzBuzz is not working');
    }
})();