const item = "milk";
const price = 2.99;
const quantity = 24;

const total = price * quantity;

const message = `You bought ${quantity} cartons of ${item} for $${total}`;
console.log(message);

const age = 18;

if (age < 21) {
  console.log("no drinks for you");
} else {
  console.log("PARTAY!");
}

// TODO: If the total is over $20, log that they get a 10% discount
// Else, log that they get a 5% discount

total = 20;

if (total > 20) {
  console.log("you get a 10% discount");
} else {
  console.log("you get a 5% discount");
}
