// масиви

// const friends = [`Mango`, `Hi`, `Maghgo`];
// const lastIndex = friends.length - 1; // (останній індекс) - довжина  - 1
// friends[0] = `dlsgkjetgj`
// friends[1] = 523463;

// console.log(friends);
// console.log(lastIndex);
// console.table(friends);
// console.log([`Mango`, `Hi`, `Maghgo`][1]);
// console.log(friends[0]); // те саме що рядком вище

//  -----

// передача по значенню
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

//  -----

// const a = [1, 2, 3];
// const b = a;

// console.log(`a`, a);
// console.log(`b`, b);

// a[0] = 500;

// console.log(`a`, a);
// console.log(`b`, b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]); // масиви порівнюються по посиланню, якщо два масиви мають однакові значення вони не дорівнюють один одному бо мають різні посилання

// -----------------------------------------

// const friends = [
//   `Mango`,
//   `Hi`,
//   `Maghgo`,
//   `sghsh`,
// ];
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) // те саме що два нижні рядки

// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += `-1`; // зміна імені елементів масиву

// console.log(i);
// console.log(friends[i]); // звернення до кожного елементу масива на літерації

// }

// ------------------------------------------

// const friends = [
//   `Mango`,
//   `Hi`,
//   `Maghgo`,
//   `sghsh`,
// ];

// for (const friend of friends) { // якщо не потрібно нічого міняти - звернення до кожного елементу масива на літерації
//   console.log(friend);
// }
// console.table(friends);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const cart = [
//   65, 85, 656, 664, 65, 557, 5, 572, 5, 5, 5, 4,
//   6, 1, 846,
// ];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]); -----

//   total += cart[i];
// }
// console.log(`Total:`, total);

// -----------------------

// const cart = [
//   65, 85, 656, 664, 65, 557, 5, 572, 5, 5, 5, 4,
//   6, 1, 846,
// ];

// let total = 0;

// for (const value of cart) // робить копію, тому використовується тільки тоді коли не треба нічого міняти
// {
//   total += value;
// }

// console.log(`Total:`, total);

// -----------------------

// const cart = [
//   100, 85, 656, 664, 65, 557, 5, 572, 5, 5, 5, 4,
//   6, 1, 846,
// ];

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const numbers = [6, 5, 56, 4, 65, 5, 4, 6, 1, 8];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i])

//     if (numbers[i]  2 === 0) {
//         console.log(`кратене!!!`);
//         total += numbers[i]
//     }
// }
// console.log(`Total:`, total)

// -----------------------------------

// const numbers = [6, 5, 56, 4, 65, 5, 4, 6, 1, 8];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   // console.log(number); //---

//   if (number % 2 === 0) {
//     // console.log(`кратене!!!`); //---
//     total += number;
//   }
// }
// console.log(`Total:`, total);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const logins = [`lkhlkj`, `ljhlj`, `kjhbilh`];
// const loginToFind = `ljhlj`;
// let message = ``;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i]

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
//   message = `Користувач ${loginToFind} не знайдений`;
// }
// console.log(message);

// ----------------------------------------------------

// const logins = [`lkhlkj`, `ljhlj`, `kjhbilh`];
// const loginToFind = `ljhlj`;
// let message = `Користувач ${loginToFind} не знайдений`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
// }
// console.log(message);

// ----------------------------------------------------

// const logins = [`lkhlkj`, `Tomas`, `kjhbilh`];
// const loginToFind = `Tomas`;

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений`
//   : `Користувач ${loginToFind} не знайдений`;

// console.log(message);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const numbers = [6, 5, 56, 4, 65, 5, 4, 6, 1, 8];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(`smallestNumber:`, smallestNumber);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const friends = [`Mango`, `Poly`, `Kiwi`, `Alex`]
// let string = ``;
// for (const friend of friends) {
//     string += friend + `,`;
// }
// string = string.slice(0, string.length - 1);
// console.log(string)

// ----------------------------------------------------

// const friends = [`Mango`, `Poly`, `Kiwi`, `Alex`];
// const string = friends.join(`, `)
// console.log(string);
// // console.log(friends);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     // console.log(
//     //   `Ця буква в нижньому реєстрі!!! - `,
//     //   letter
//     // );
//     invertedString += letter.toUpperCase();
//   } else {
//     //   console.log(
//     //     `Ця буква в верхньому реєстрі!!! - `,
//     //     letter
//     //   );
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(`invertedString:`, invertedString);

// ----------------------------------------------------

// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;

// for (const letter of letters) {
//   invertedString += letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(`invertedString:`, invertedString);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const title = `Top 10 benefits of React framework`;

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(` `);
// console.log(words);

// const slug = words.join(`-`);
// console.log(slug);

// ----------------------------------------------------

// const title = `Top 10 benefits of React framework`;

// const slug = title
//   .toLowerCase()
//   .split(` `)
//   .join(`-`);

// console.log(slug);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//   total += array1[i];
// }
// for (let i = 0; i < array2.length; i += 1) {
//   total += array2[i];
// }
// console.log(total);

// ----------------------------------------------------

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2)

// for (const number of numbers) {
//     total += number
// }
// console.log(total);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const cards = [
//   `Карточка-1`,
//   `Карточка-2`,
//   `Карточка-3`,
//   `Карточка-4`,
//   `Карточка-5`,
// ];
// console.table(cards);

// const cardToRemove = `Карточка-3`;
// const index = cards.indexOf(cardToRemove)

// console.log(index)

// cards.splice(index, 1)
// console.table(cards);

// ----------------------------------------------------

// const cards = [
//   `Карточка-1`,
//   `Карточка-2`,
//   `Карточка-3`,
//   `Карточка-4`,
//   `Карточка-5`,
// ];
// console.table(cards);

// const cardToInsert = `Карточка-6`;
// const index = 3;

// // cards.splice(cards.length, 0, 5, 25, 50);
// // cards.splice(1, 0, 5, 25, 50);
// cards.splice(index, 0, cardToInsert);

// console.table(cards);

// ----------------------------------------------------

// const cards = [
//   `Карточка-1`,
//   `Карточка-2`,
//   `Карточка-3`,
//   `Карточка-4`,
//   `Карточка-5`,
// ];
// // console.table(cards);

// const cardToUpdate = `Карточка-4`;
// const index = cards.indexOf(cardToUpdate);

// // cards.splice(1, 1, 555);
// // cards.splice(cards.length, 0, 5635);

// // console.log(index);

// cards.splice(index, 1, `Оновлена карточка-4`);

// console.table(cards);

//------------------------
//------------------------
//-----------------------
// const arr = [1, 2, 3, 4, 5, 6];
// for (
//   let l = 0, r = arr.length - 1;
//   l < r;
//   l++, r--
// ) {
//   console.log(arr[l], arr[r]);
// }
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// const a = ["Mango"];
// const b = a;
// const c = a;
// a.push("Poljkfky");
// b.push("Ajjmfhjax");
// c.push(`Ajanjmvx`);
// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// indexOf

// const clients = ["Mango", "Kiwi", "Ajax", "Poly", "Kiwi"];
// const q = clients.indexOf("Poly");
// console.log(q)

// includes

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Maftyngo")); // false

// const fruit = "apple";
// if (fruit === "apphgkle" || fruit === "apple") {
//   console.log("It is a red fruit!");
// }

// const fruit = "apple";
// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// const redFruits = [
//   "apple",
//   "strawberry",
//   "cherry",
//   "cranberries",
// ];
// const fruit = "apple";
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// push і pop

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(`kjk`);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(`klhgkig`);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const numbers = [1, `klh`, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// slice

// const clients = [
//   "Mango",
//   "Ajax",
//   "Poly",
//   "Kiwi",
//   "Mango",
//   "Ajax",
//   "Poly",
//   "Kiwi",
// ];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(6)); // ["Poly", "Kiwi"]

// splice

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// concat

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// ==================================================================

// const add = function (x, y, c) {
//   console.log(x);
//   console.log(y);
//   console.log(c);
//   return x + y + c;
// };

// const bay1 = add(3, 8, 34);
// console.log(bay1);

// ==================================================================

// const calculateTotalPrice = function (items) {
//   console.log(`item in function`, items);

//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// // console.log(calculateTotalPrice([19, 29, 3, 98]));

//-----------------------------------------------------------------------

// const fn = function (a, ...args) {
//     console.log(`${a}`);
//   console.log(a);

//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('bay', 1, 2, 3, 4, 5, 6);
// fn('hi', 1, 2, 3, 4, 5, 6, 7, 8);
// fn(123456789, 2, 3, 4, 5, 6, 7, 8);

// ==================================================================
// ==================================================================
// ==================================================================
