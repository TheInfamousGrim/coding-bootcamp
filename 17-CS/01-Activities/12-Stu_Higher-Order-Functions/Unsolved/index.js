const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if (index === array.length - 1) {
        return (accumulator + currentValue) / array.length;
    }
    // Add the current value to our total.
    return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
const gradeAverage = grades.reduce(findAverage());

console.log(gradeAverage);
