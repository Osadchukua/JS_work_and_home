// Розгалуження
// -----------------------------------------

// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost); // 100

// -----------------------------------------

// let cost = 25;
// const subscription = 'free - 25';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost);

// -----------------------------------------

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// -----------------------------------------

// let cost;
// const subscription = 'premium1';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else if (subscription === 'kjfgh') {
//   cost = 123;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost);

// -----------------------------------------
// Тернарний оператор
// -----------------------------------------

// const age = 120;
// let type;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // "adult"

// const age = 10;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// -----------------------------------------

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

// const num1 = 50;
// const num2 = 100;

// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber);

// -----------------------------------------
// Інструкція switch
// -----------------------------------------

// let cost;
// const subscription = 'pro';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500

// -----------------------------------------

// let cost;
// const book = 'Девятниця';
// const price = 25;

// switch (book) {
//   case 'Девятниця':
//     cost = `Девятниця ${price}` ;
//     break;

//   case 'Брошура':
//     cost = 25;
//     break;

//   case 'Книга':
//     cost = 25;
//         break;

//     default:
//         console.log('Такої книги немає!');
// }
// console.log(cost);

// -----------------------------------------
// Цикли
// -----------------------------------------

// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// -----------------------------------------

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter +=1;
// }

// -----------------------------------------
// do...while
// -----------------------------------------

// let password = '';

// do {
//   password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// -----------------------------------------
// for
// -----------------------------------------

// for (let i = 0; i <= 20; i += 3) {
//   console.log(i);
// }

// -----------------------------------------

// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 2) {
//   sum += i;
// }

// console.log(sum);

// -----------------------------------------

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// -----------------------------------------

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     break;
//   }
// }

// console.log('Лог після циклу');

// -----------------------------------------

// const number = 11;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//     }
    

//   console.log('Непарне i:', i); // 1, 3, 5, 7, 9
// } 
