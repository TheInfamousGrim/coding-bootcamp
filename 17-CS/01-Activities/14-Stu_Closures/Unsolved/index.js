// TODO: Complete the 'counter' function below.
function counter() {
    // Create a 'count' variable
    let count = 1;

    // Return an inner function creating a closure
    return {
        increment() {
            // use before if you want to increment
            return count++;
        },
    };
}

module.exports = counter;
