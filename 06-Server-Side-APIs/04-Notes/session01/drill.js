// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// ```
// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2
// ```

const input = [1.5, 3, 2.5, 1];

function averageNumbersArray(array) {
    let sum = 0;
    let average = 0;
    array.forEach((num) => {
        sum += num;
    });
    return (average = sum / array.length);
}

console.log(averageNumbersArray(input));
