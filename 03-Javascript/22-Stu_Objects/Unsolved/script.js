// WRITE YOUR CODE BELOW
// construct the object using object literal
const customerOrder = {
  drinkName: 'Mountain Dew',
  numberSugar: 200,
  orderReady: true,
};

// log the drink name and number of sugars to the console
console.log(customerOrder.drinkName);
console.log(customerOrder.numberSugar);

// function for determing if the drink is ready
function orderReady(status) {
  return status ? 'Ready for pick-up' : 'Still in order queue';
}

console.log(orderReady(customerOrder.orderReady));
