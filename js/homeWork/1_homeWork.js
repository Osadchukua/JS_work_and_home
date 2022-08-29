// 14 -------
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }

// -----
// const subscription = "pro";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 100

// ---
// const subscription = "free";
// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// 15 ------
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// 16 --------
// function checkStorage(available, ordered) {
//   let message;

//   if (available >= ordered) {
//     message = `Order is processed, our manager will contact you.`;
//   }
// else {
//     message = `Not enough goods in stock!`;
//   }

//   return message;
// }
// console.log(message);

// 17 ------
// let age = 25;
// // Класичний запис
// age = age + 1;
// console.log(age); // 26

// let age = 25;
// // Просто коротший запис, працює так само
// age += 1;
// console.log(age); // 26

// 18 -------
// function makeTransaction(
//   pricePerDroid,
//   orderedQuantity,
//   customerCredits
// ) {
//   let message;
//   const totalPrice =
//     pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice) {
//     message = `Insufficient funds!`;
//   } else if (customerCredits >= totalPrice) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }

// 19------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (ADMIN_PASSWORD === password) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// 20------
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message =
//       "There are no products in the order!";
//   } else if (ordered > available) {
//     message =
//       "Your order is too large, there are not enough items in stock!";
//   } else {
//     (message  = "The order is accepted, our manager will contact you");
//   }
//   return message;
// }

// 21------
// function isNumberInRange(start, end, number) {
//   const isInRange =
//     number >= start && number <= end; // Change this line

//   return isInRange;
// }

// 22 ----
// function checkIfCanAccessContent(subType) {
//   const canAccessContent =
//     subType === `pro` || subType === `vip`; // Change this line

//   return canAccessContent;
// }

// 23------
// function isNumberNotInRange(start, end, number) {
//   const isInRange =
//     number >= start && number <= end;
//   const isNotInRange = !(
//     number >= start && number <= end
//   ); // Change this line

//   return isNotInRange;
// }

// 24-----
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = 0.1;
//   } else if (
//     totalSpent >= 20000 &&
//     totalSpent < 50000
//   ) {
//     discount = 0.05;
//   } else if (
//     totalSpent >= 5000 &&
//     totalSpent < 20000
//   ) {
//     discount = 0.02;
//   } else if (
//     totalSpent >= 0 &&
//     totalSpent < 5000
//   ) {
//     discount = 0;
//   }
//   return discount;
// }

// 25-----------
// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   return message;
// }

// 26------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = password  === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   return message;
// }

// 27------
// function getSubscriptionPrice(type) {
//   let price;

//   switch (
//     type
//   ) {
//     case `starter`:
//       price = 0;
//       break;

//     case `professional`:
//       price = 20;
//       break;

//     case `organization`:
//       price = 50;
//   }
//   return price;
// }

// 28------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = `Welcome!`;
//       break;
//     default:
//       message = `Access denied, wrong password!`;
//   }
//   return message;
// }

// 29------
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case `China`:
//       message =
//         "Shipping to China will cost 100 credits";
//       break;
//     case `Chile`:
//       message =
//         "Shipping to Chile will cost 250 credits";
//       break;
//     case `Australia`:
//       message =
//         "Shipping to Australia will cost 170 credits";
//       break;
//     case `Jamaica`:
//       message =
//         "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message =
//         "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

// 30----
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// 31-----
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// 32--------
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// 33-----
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

// 34----
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// 35-------
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// 36------
// function checkForSpam(message) {
//   let result;

//   result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale");

//   return result;
// }

// =================================================================
// let productName = 'Droid';
// let pricePerItem = 2000;
// // console.log(productName);
// // productName = productName.replace('Droid', 'Repair droid');
// // console.log(productName);
// console.log(pricePerItem);
// pricePerItem = pricePerItem + 1500;
// // weight = Number(weight.replace(',', '.'));
// console.log(pricePerItem);

// Змінна pricePerItem оголошена за допомогою let
//     При оголошенні змінної pricePerItem присвоєно значення — число 2000

// Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// Змінна productName оголошена за допомогою let
//     При оголошенні змінної productName присвоєно значення — рядок "Droid"

// Змінній productName присвоєно нове значення — рядок "Repair droid"

// =================================================================

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//   message = `You ordered droids worth ${
//     (orderedQuantity * pricePerDroid) + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//     console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//     console.log(isMatch);
//   return isMatch;
// }

// isValidPassword("mangodab3st") // false
// isValidPassword("kiwirul3z") // false
// isValidPassword("jqueryismyjam") //є true
// =====================
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${
//         customerCredits - totalPrice
//       } credits left`;
//   }
// console.log(message);
//   return message;
// }

// makeTransaction(1000, 3, 15000); //повертає "You ordered 3 droids, you have 12000 credits left"
// makeTransaction(5000, 10, 8000); //повертає "Insufficient funds!"
// makeTransaction(500, 10, 5000) // "You ordered 10 droids, you have 0 credits left"

// =====================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//     console.log(message);
//   return message;
// }

// checkPassword('mangohackzor'); //повертає "Access denied, wrong password!"
// checkPassword(null); //повертає "Canceled by user!"
// checkPassword('polyhax'); //повертає "Access denied, wrong password!"
// checkPassword('jqueryismyjam'); //повертає "Welcome!"

// =====================

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = "There are no products in the order!"
//     }
//     else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     }
//     else {
//         message = "The order is accepted, our manager will contact you"}

//     console.log(message);
//   return message;
// }

// checkStorage(100, 50); //повертає "The order is accepted, our manager will contact you"
// checkStorage(100, 130); //повертає "Your order is too large, there are not enough items in stock!"
// checkStorage(70, 0); //повертає "There are no products in the order!"
// checkStorage(200, 20); //повертає "The order is accepted, our manager will contact you"
// checkStorage(200, 250); //повертає "Your order is too large, there are not enough items in stock!"
// checkStorage(150, 0); //повертає "There are no products in the order!"

// =====================

// function isNumberInRange(start, end, number) {
//   const isInRange = (start <= number && end >= number);
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, 17) //повертає true
// isNumberInRange(10, 30, 5) //повертає false
// isNumberInRange(20, 50, 24) //повертає true
// isNumberInRange(20, 50, 76) //повертає false

// =====================

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//     const isNotInRange = !(number >= start && number <= end); // Change this line

//     console.log(isInRange);
// console.log(`isNotInRange`, isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17)// повертає false
// isNumberNotInRange(10, 30, 5) //повертає true
// isNumberNotInRange(20, 50, 24) //повертає false
// isNumberNotInRange(20, 50, 76)// повертає true

// =====================

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//     if (totalSpent >= 50000) {
//       discount = GOLD_DISCOUNT;
//     } else if (totalSpent <= 50000 && totalSpent >= 20000) {
//       discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//       discount = BRONZE_DISCOUNT;
//     } else if (totalSpent <= 5000) {
//       discount = BASE_DISCOUNT;
//     }

//     console.log(discount);
//   return discount;
// }

// getDiscount(137000) //повертає 0.1
// getDiscount(46900) //повертає 0.05
// getDiscount(8250) //повертає 0.02
// getDiscount(1300) //повертає 0
// getDiscount(5000) //повертає 0.02
// getDiscount(20000) //повертає 0.05
// getDiscount(50000) //повертає 0.1

// =====================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   //   if (ordered > available) {
//   //     message = 'Not enough goods in stock!';
//   //   } else {
//   //     message = 'The order is accepted, our manager will contact you';
//   //   }

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//  console.log(message);
//   return message;
// }

// checkStorage(100, 50); //повертає "The order is accepted, our manager will contact you"
// checkStorage(100, 130); // повертає "Not enough goods in stock!"
// checkStorage(200, 20); //повертає "The order is accepted, our manager will contact you"
// checkStorage(200, 150); // повертає "The order is accepted, our manager will contact you"
// checkStorage(150, 180); // повертає "Not enough goods in stock!"

// =====================

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }

//   console.log(price);
//   return price;
// }

// getSubscriptionPrice('professional'); // повертає число 20
// getSubscriptionPrice('organization'); // повертає число 50
// getSubscriptionPrice('starter'); //повертає число 0

// =====================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//     console.log(message);
//   return message;
// }

// checkPassword('mangohackzor'); //повертає "Access denied, wrong password!"
// checkPassword(null); //повертає "Canceled by user!"
// checkPassword('polyhax'); //повертає "Access denied, wrong password!"
// checkPassword('jqueryismyjam'); //повертає "Welcome!"

// =====================

// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;

//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;

//     case 'Australia ':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;

//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;

//     default:
//           message = `Sorry, there is no delivery to your country`;
//   }
// console.log(message);
//   return message;
// }

// getShippingCost('Australia'); //повертає "Shipping to Australia will cost 170 credits"
// getShippingCost('Germany'); //вертає "Sorry, there is no delivery to your country"
// getShippingCost('China'); //ртає "Shipping to China will cost 100 credits"
// getShippingCost('Chile'); //ртає "Shipping to Chile will cost 250 credits"
// getShippingCost('Jamaica'); //вертає "Shipping to Jamaica will cost 120 credits"
// getShippingCost('Sweden'); //ертає "Sorry, there is no delivery to your country"

// =====================

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     console.log(message.length);
//   return message;
// }

// getNameLength("Poly") //овертає "Name Poly is 4 characters long"
// getNameLength("Harambe") //повертає "Name Harambe is 6 characters long"
// getNameLength("Billy") //повертає "Name Billy is 5 characters long"
// getNameLength("Joe") //повертає "Name Joe is 3 characters long"

// =====================

// function getSubstring(string, length) {
//     const substring = string.slice(0, length); // Change this line

// console.log(substring);
//   return substring;
// }

// getSubstring("Hello world", 3) //повертає "Hel"
// getSubstring("Hello world", 6) //повертає "Hello"
// getSubstring("Hello world", 8) //повертає "Hello wo"
// getSubstring("Hello world", 11) //повертає "Hello world"
// getSubstring("Hello world", 0) //повертає ""

// =====================

// function formatMessage(message, maxLength) {
//   let result;

//     if (message.length <= maxLength) {
//       result = message;
//     } else {
//         result = message.slice(0, maxLength) + '...';
//     }

//       console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16); //повертає "Curabitur ligula..."
// formatMessage('Curabitur ligula sapien', 23); //повертає "Curabitur ligula sapien"
// formatMessage('Vestibulum facilisis purus nec', 20); // повертає "Vestibulum facilisis..."
// formatMessage('Vestibulum facilisis purus nec', 30); //повертає "Vestibulum facilisis purus nec"
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15); //повертає "Nunc sed turpis..."
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41); //повертає "Nunc sed turpis a felis in nunc fringilla"

// =====================

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   console.log(result);
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor") //повертає true
// checkForName("Egor Kolbasov", "egor") //повертає false
// checkForName("Egor Kolbasov", "egOr") //повертає false
// checkForName("Egor Kolbasov", "Zhenya") //повертає false
// checkForName("Vadim Nekrasov", "Vadim") //повертає true
// checkForName("Vadim Nekrasov", "vadim") //повертає false
// checkForName("Vadim Nekrasov", "Dima") //повертає false

// =====================

// Функція checkForSpam(message) приймає рядок(параметр message),
//   перевіряє його на вміст заборонених слів spam і sale,
//   повертає результат перевірки.

//   Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;


//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');


//       console.log(result);
//   return result;
// }

// checkForSpam('Latest technology news'); //повертає false
// checkForSpam('JavaScript weekly newsletter'); //повертає false
// checkForSpam('Get best sale offers now!'); //повертає true
// checkForSpam('Amazing SalE, only tonight!'); //повертає true
// checkForSpam('Trust me, this is not a spam message'); // повертає true
// checkForSpam('Get rid of sPaM emails. Our book in on sale!'); //повертає true
// checkForSpam('[SPAM] How to earn fast money?'); //повертає true
