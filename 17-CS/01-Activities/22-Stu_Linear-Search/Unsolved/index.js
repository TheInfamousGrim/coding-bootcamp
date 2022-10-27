const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // check to see if the element is present in the array
        if (array[i] === element) {
            // return the index of the array
            return i;
        }
    }
    // return -1 if the element is not found within the array
    return -1;
};

console.log(linearSearch(arr, 77));
console.log(linearSearch(arr, 7));

// Return multiple instances of an element
const linearSearchMultipleElements = (array, element) => {
    // create an empty array to store the element indexes
    const elemIndexes = [];

    // Loop through the give array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            elemIndexes.push(i);
        }
    }

    // If no indexes were added then return not found
    return elemIndexes.length === 0 ? 'Not found' : elemIndexes;
};

console.log(linearSearchMultipleElements(arr, 7));
console.log(linearSearchMultipleElements(arr, 77));


module.exports = { linearSearch };
