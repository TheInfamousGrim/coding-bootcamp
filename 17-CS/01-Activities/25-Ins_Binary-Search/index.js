const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// binarySearchFunction that accepts a sorted array and the element we are searching for
const binarySearchElem = (arr, elem) => {
    // Two variables which represent the start index and the end index of the given array
    let startIndex = 0;
    let endIndex = arr.length - 1;

    // While loop where startIndex <= endIndex loop through the array
    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[middleIndex] === elem) {
            console.log(middleIndex);
            return true;
        }
        if (arr[middleIndex] < elem) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
    return false;
};

// console.log(binarySearchElem(sortedArr, 8));
// console.log(binarySearchElem(sortedArr, 20));
console.log(binarySearchElem(sortedArr, 7));
