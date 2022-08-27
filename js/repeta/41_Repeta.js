// https://www.youtube.com/watch?v=_wcFovNQTWU&ab_channel=GoITFrontend
// Модуль 4. Занятие 7. Callback-функции и замыкания (11.08)
// =========================================
// Callback
// =========================================

// const fnA = function (messsage, callback) {
//   console.log(messsage);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('Лог при виклику FnB', number);
// };

// fnA('qwerty', fnB);

// =======================================================

// const doMath = function (callback, a, b) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(add, 2, 8);
// doMath(sub, 58, 8);

// =======================================================

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath(2, 8, function (x, y) {
//   return x + y;
// });
// doMath(58, 8, function (x, y) {
//   return x - y;
// });

// =======================================================

// const buttonRef = document.querySelector('.js-button')

// const handBtnClick = function () {
//     console.log('клік по кнопці' + Date.now());
// }
// buttonRef.addEventListener('click', handBtnClick);

// =======================================================

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// =======================================================

// const callback = function () {
//     console.log('через 2 сек в середині колбека в таймауті');
// }

// console.log('В колі перед таймаутом');
// setTimeout(callback, 2000)
// console.log('В колі після таймаутом');

// =======================================================

// const filter = function (array, test) {
//   const filteredArrey = [];

//   for (const el of array) {
//     // console.log(el);
//     // console.log(test(el));

//     const passed = test(el);

//     if (passed) {
//       filteredArrey.push(el);
//     }
//   }
//   return filteredArrey;
// };

// // ===========

// const callback = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback);
// // console.log(r1);

// // ----------

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
//   return value <= 4;
// });
// // console.log(r2);

// // ===========

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);

// // ----------

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value <= 4);
// console.log(r2);

// =======================================================

// const filter = (array, test) => {
//   const filteredArrey = [];

//   for (const el of array) {
//     // console.log(el);
//     // console.log(test(el));

//     const passed = test(el);

//     if (passed) {
//       filteredArrey.push(el);
//     }
//   }
//   return filteredArrey;
// };

// const fruits = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// // ---

// // const getFruitsWithQuantity = function (fruit) {
// //   return fruit.quantity  <= 5;
// // };

// // const r3 = filter(fruits, getFruitsWithQuantity);
// // console.log(r3);

// // ---

// // const getFruitsWithQuantity = fruit => fruit.quantity  <= 5;

// const r3 = filter(fruits, fruit => fruit.quantity <= 5);
// console.log(r3);

// =======================================================
// Замикання
// =======================================================

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готує ${dish}`);
//     };
// console.log(makeDish);
//     return makeDish;
// };

// const mango = makeSheff('Mango');
// mango('котлети')
// mango('пироги')

// const poly = makeSheff('Poly')
// poly('кукурудза');
// poly('курка');
// poly('чай');

// =======================================================
// Округлятор
// =======================================================

// const rounder = function (playces) {
//   return function (number) {
//     return Number(number.toFixed(playces));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(5.54566));
// console.log(rounder2(65.535646));
// console.log(rounder3(55.535646));
// console.log(rounder3(56.563546));

// =======================================================
// 1:31:00
// =======================================================
// 1:40:00 Зарплата
// =======================================================
// 1:47:00 стрілкові функції
// =======================================================

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };
// // ----------------
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// // ----------------------------------------------

// const add = function (a, b, c) {
//   return a + b + c;
// };
// // ----------------
// const add = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// =======================================================

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// ----------------

// const fnA = () => ({ a: 5 });

// console.log(fnA());

// =======================================================

