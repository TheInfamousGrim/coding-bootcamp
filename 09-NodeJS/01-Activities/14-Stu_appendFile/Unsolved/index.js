// TODO: What are we importing?
// fs library that can allow us to read and write to files in our package
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // this is an error catching function
  // if there is an error when calling the function an error will be shown in the terminal
  // If the function is completed succesfully then commit logged will show in the terminal
  err ? console.error(err) : console.log('Commit logged!')
);
