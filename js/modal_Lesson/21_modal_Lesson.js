// Масиви
// -----------------------------------------

// Доступ до елементів

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// -----------------------------------------

// Перевизначення

// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// -----------------------------------------

// Довжина масиву

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.length); // 3

// -----------------------------------------

// Індекс останнього елемента

// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[2] = `sdfg`;
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"
// console.log(clients[2]); // "Ajax"

// -----------------------------------------
// Цикл for...of
// -----------------------------------------

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript sdfhef';

// for (const character of string) {
//   console.log(character);
// }

// -----------------------------------------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// -----------------------------------------

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// -----------------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// -----------------------------------------

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'apple';

// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } 

// -----------------------------------------

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

