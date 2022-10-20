// WRITE YOUR CODE HERE

var studentNames = ["George", "Jacob", "Anya", "Fatima", "Precious"];

console.log(studentNames.length);

// loop through names arrow function
studentNames.forEach((element) => {
  console.log("Welcome to the class " + element);
});

// replace first name in the array
const replaceFirstName = (array, element) => {
  array[0] = element;
  return element + " is in class";
};

console.log(replaceFirstName(studentNames, "Bartholomew"));
console.log(studentNames);

// access the last item in an array

console.log(studentNames.at(-1));
