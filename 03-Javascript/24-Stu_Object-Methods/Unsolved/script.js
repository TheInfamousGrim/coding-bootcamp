const chosenPet = 'Lulu';

const shelter = {
  dogs: ['Mackie', 'Bernice', 'Cookie Monster', 'Spot'],
  cats: ['Astrid', 'Lulu', 'Fluffy', 'Mouser'],
  apptMessage() {
    console.log(
      'Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.'
    );
  },
};

// Debug the code below
// Added shelter.appMessage() so the method could be accessible
function dogMessage() {
  console.log(
    `Congrats! ${chosenPet.Lulu}, a great dog, is available for adoption!`
  );
  shelter.apptMessage();
}

// Parenthesis was missing in apptMessage() method
function catMessage() {
  console.log(
    `Congrats! ${chosenPet}, an awesome cat, is available for adoption!`
  );
  shelter.apptMessage();
}

// Added shelter. before dogs and cats so that the arrays could be accessed inside the object
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log('It looks like the pet is not available.');
  console.log(
    `Check out our featured dog, ${shelter[0]}. or our featured cat, ${shelter.cat.shelter[1]}`
  );
}
