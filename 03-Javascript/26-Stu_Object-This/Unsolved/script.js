// TODO: What does 'this' refer to?
// This is refering to the global object in this case it's the window
console.log(this);

// TODO: What does 'this' refer to?
// Again this is referring to the global object, in this case the window
function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?
// Refers to the global object and finds the variable age and refers to it
const child = {
  age: 10,
  ageTenYears() {
    console.log(this.age + 10);
  },
};

// TODO: What will this log?
// it will log 5000
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth() {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
