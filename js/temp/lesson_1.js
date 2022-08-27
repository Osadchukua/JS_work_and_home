// arrey - Масиви;

// const clients = [
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Mango",
//   "Poly",
//   "Ajfbsax",
// ];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients);

// console.log(clients.length);

// const lastElementIndex = clients.length - 1;

// console.log(lastElementIndex);
// console.log(clients[lastElementIndex]);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

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

// const numbers = [
//   1, 3, 14, 18, 48, 7, 29, 5, 34, 87,
// ];
// const threshold = 5;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(
//     `Число більше за ${threshold}: ${numbers[i]}`
//   ); // 18, 29, 34
// }

// console.log(1 * 3 + 2 + "8" + (6 + 3 * 2));

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice =
// pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//   console.log(
//     "Hello, this is my first function!"
//   );
// }
// sayHi();
// sayHi();
// sayHi();

// function add(a, b, c) {
//   console.log(
//     `Addition result equals ${a + b + c}`
//   );
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function multiply(x, y, z, k) {
//   console.log("Код до return виконується звичайним чином");
//   return x * y * z + k;
// }

// let result = multiply(2, 3, 0, 5);
// console.log(result);

// result = multiply(4, 8, 12, 3);
// console.log(result);

// result = multiply(17, 6, 25, 62);
// console.log(result);

// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false
