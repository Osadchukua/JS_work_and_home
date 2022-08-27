// function deliverPizza(pizzaName) {
//   console.log(pizzaName);
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   console.log(callback(pizzaName));
//   // return callback, pizzaName;
// }

// makeMessage('Royal Grand', makePizza);
// makeMessage('Ultracheese', deliverPizza);
// ==================================


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function makePizza(pizzaName) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// });
// // ==================================
