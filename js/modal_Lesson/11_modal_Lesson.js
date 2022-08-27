// const yearOfBirth = 2006;

// console.log(yearOfBirth);

// -----------------------------------------

// let age;

// console.log(age);

// age = 14;

// console.log(age);

// -----------------------------------------

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = 'JavaScript is awesome!';
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// -----------------------------------------

// const message = "Hi is alert!";
// alert(message);

// -----------------------------------------

// const username = "Mango";
// console.log("Username is:", username);

// -----------------------------------------

// const foo = {
//   id: 1,
//   verified: true,
//   color: "green",
// };
// const bar = {
//   id: 2,
//   verified: false,
//   color: "red",
// };

// console.log({ foo, bar });
// console.table({ foo, bar });

// -----------------------------------------

// console.group('Деталі користувача');
// console.log(`ім'я: Джон Доу`);
// console.log('вакансія: розробник програмного забезпечення');

// // Вкладена група
// console.groupCollapsed("Address");
// console.log('Вулиця: 123 Townsend Street');
// console.log('Місто: Сан-Франциско');
// console.log('Стан: CA');
// console.groupEnd();

// console.groupEnd();

// -----------------------------------------

// // Просимо клієнта підтвердити бронювання готелю
// // і зберігаємо результат роботи confirm у змінну
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// -----------------------------------------

// // Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// // і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// -----------------------------------------

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// -----------------------------------------

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// -----------------------------------------

// console.log(`5 === "5`, 5 === "5"); // false
// console.log("5 === 5", 5 === 5); // true
// console.log(`5 !== "5"`, 5 !== "5"); // true
// console.log("5 !== 5", 5 !== 5); // false
// console.log("1 === true", 1 === tr,ue); // false
// console.log("1 !== true", 1 !== true); // true

// -----------------------------------------

// // Приведення до числа
// const valueA = '5';

// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = 'random string';

// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// -----------------------------------------

// // Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// -----------------------------------------

// // Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// -----------------------------------------

// const qwer = '5.6px';
// console.log(qwer);

// awe = Number.parseInt(qwer);
// awe2 = Number.parseFloat(qwer);

// console.log(awe);
// console.log({ awe, awe2 });
// console.log(awe, 'and', awe2);

// -----------------------------------------

// const validNumber = Number('51'); // 51
// console.log(`1`, Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// -----------------------------------------

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// x = 0.2 + 0.1
// console.log(x);

// -----------------------------------------

// console.log(0.17 + 0.248); // 0.41000000000000003
// console.log((0.17 + 0.244).toFixed(2)); // 0.41

// -----------------------------------------

// var numObj = 12345.6789;

// console.log(numObj.toFixed());
// console.log(numObj.toFixed(1));
// console.log(numObj.toFixed(6));

// var numObj = 1.23 * 20;
// console.log('1.23 * 20 =', numObj.toFixed(10));

// var numObj = 1.23 - 1;
// console.log('1.23 - 1 =', numObj.toFixed(4));

// -----------------------------------------

// // Math.floor(num) - повертає найбільше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log((Math.random() * (10 - 1) + 1).toFixed(2)); // псевдовипадкове число від 1 до 10

// -----------------------------------------

// const numbers = [20, 10, 50, 40];
// maxNamber = Math.max(...numbers);
// minNamber = Math.min(...numbers);

// console.log('max:', maxNamber, 'min:', minNamber);

// const array = [1, 3, 2];

// console.log(Math.max(...array));

// ----------------------------------------

// Конкатенація рядків

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4" + (4 * 9)); // "3436"

// -----------------------------------------

// const guestName = 'Манго';
// const roomNumber = 207;
// const greeting =
//   'Welcome ' + guestName + ', your room number is ' + roomNumber + '!';
// console.log(greeting);

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// -----------------------------------------

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47
// console.log('message + message', (message + message).length);

// -----------------------------------------

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// names = userInput.toUpperCase();
// console.log(names);

// -----------------------------------------

// const message = 'Welcome to Bahamas!';
// // console.log(message.indexOf("Baha")); // 8
// // console.log(message.indexOf("hello")); // -1

// index = message.indexOf("me");
// console.log(index);

// -----------------------------------------

// const productName = "Ремонтний дроїд";

// // console.log(productName.includes("н")); // true
// // console.log(productName.includes("Н")); // false
// // console.log(productName.includes("дроїд")); // true
// // console.log(productName.includes("Дроїд")); // false
// // console.log(productName.includes("Ремонтний")); // true
// // console.log(productName.includes("ремонтний")); // false

// inkludLetter = productName.includes('дро')
// console.log(inkludLetter);

// -----------------------------------------

// const jsFileName = "script.js";
// // console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// // console.log(cssFileName.endsWith(".js")); // false

// js1 = jsFileName.endsWith("s");
// css1 = cssFileName.endsWith("js");

// console.log( `jsFileName - ${js1}, cssFileName - ${css1}` );

// -----------------------------------------

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const jsFileName = 'script.js';
// const replace = jsFileName.replace('script.js', 'Ivan');
// console.log(replace);

// -----------------------------------------

// const productName = 'Repair droid';
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
// console.log(productName.indexOf('dro'));
// console.log('Ivan', productName.slice(7, productName.length));

// -----------------------------------------
// Логічні оператори
// -----------------------------------------

// const age = 50;
// console.log('age =', age);
// console.log( 'age > 10', age > 10);
// console.log( 'age < 100', age < 100);
// console.log( 'age > 10 && age < 100', age > 10 && age < 100);

// -----------------------------------------

// const age = 4;
// console.log('age', age);
// console.log('age < 10', age < 10, 'age > 30', age > 30);
// console.log('age < 10 || age > 30', age < 10 || age > 30);

// -----------------------------------------

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// const sum7 = 7;
// const mas8 = 8;
// console.log('sum7 !== sum7', sum7 !== sum7);
// console.log('sum7 !== mas8', sum7 !== mas8);

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------

// -----------------------------------------