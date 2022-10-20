// declares the arguments
const a = process.argv[2];

const b = process.argv[3];

// compare the two arguments to see if they're ===
// Compare the variables directly
console.log(a === b);

// Comparing the argument values directly
console.log(process.argv[2] === process.argv[3]);
