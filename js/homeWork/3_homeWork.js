// 1  ----------------------------------------
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// apartment.name = 'Henry';
// apartment.phone = '982-126-1588';
// apartment.email = 'henry.carter@aptmail.com';

// console.log(apartment);

// 2  ----------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);

// 3  ----------------------------------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating, aptDescr, aptPrice, aptTags);

// 4  ----------------------------------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];

// 5  ----------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// 6  ----------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// 7  ----------------------------------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { };
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// 8  ----------------------------------------

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// 9  ----------------------------------------

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// 10  ----------------------------------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {

//   keys.push(key);
//   values.push(apartment[key]);
// }
//   console.log(keys);
//   console.log(values);

// 11  ----------------------------------------

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// 12  ----------------------------------------

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// propCount = Object.keys(object).length;
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({}) // 0
// countProps({ name: "Mango", age: 2 }) // 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // 3

// 13  ----------------------------------------

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Перебери об'єкт apartment, використовуючи метод Object.keys()
// const keys = Object.keys(apartment);
// // console.log(keys);
// // і цикл for...of.
// for (const key of keys) {
//   // Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//   // і додай в масив values всі значення його властивостей.
//   values.push(apartment[key]);
// }

// 14  ----------------------------------------
// // Виконай рефакторинг функції countProps(object),
// //   використовуючи метод Object.keys()
// // і, можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   console.log(propCount);
//   return propCount;
// }

// countProps({}); // 0
// countProps({ name: 'Mango', age: 2 }); // 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

// // Функція підраховує тільки власні властивості об'єкта
// // Функція використовує метод Object.keys() і, можливо, цикл for...of
// ------------------

// 15  ----------------------------------------
// // Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// // а у змінну values - масив всіх значень його властивостей.
// // Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Оголошена змінна keys
// // Значення змінної keys - це масив ["descr", "rating", "price"]
// // Оголошена змінна values
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// // Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// // Для отримання масиву значень об'єкта apartment використовується Object.values()

// 16  ----------------------------------------

// // Напиши функцію countTotalSalary(salaries),
// // яка приймає об'єкт зарплат,
// // де ім'я властивості - це ім'я співробітника,
// // а значення властивості - це зарплата.
// // Функція повинна розрахувати загальну суму зарплат співробітників
// // і повернути її.
// // Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({}); // 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // 400
// // Функція враховує тільки власні властивості об'єкта

// 17  ----------------------------------------

// // Перебери масив об'єктів colors, використовуючи цикл for...of.
// // Додай у масив hexColors - значення властивостей hex з усіх об'єктів масиву colors.
// // Додай у масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const {hex, rgb} of colors) {

//     hexColors.push(hex);
//     rgbColors.push(rgb);

// }
//   console.log(hexColors);
//   console.log(rgbColors);

// 18  ----------------------------------------

// Напиши функцію getProductPrice(productName),
// яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products
// і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) console.log(product.price);
//     return product.price;
//   }

//   return null;
// }

// getProductPrice('Radar'); // 1300.
// getProductPrice('Grip'); // 1200.
// getProductPrice('Scanner'); // 2700.
// getProductPrice('Droid'); // 400.
// getProductPrice('Engine'); // null.

// 19  ----------------------------------------

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.

// Функція повинна повернути
// масив всіх значень
// властивості з таким ім'ям
// з кожного об'єкта в масиві products.

// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let array = [];
//   for (let { name, price, quantity } of products) {
//     if (propName === 'name') {
//       array.push(name);
//     } else if (propName === 'price') {
//       array.push(price);
//     } else if (propName === 'quantity') {
//       array.push(quantity);
//     }
//   }
//   return array;
// }

// console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // []

// 20  ----------------------------------------

// Напиши функцію calculateTotalPrice(productName),
// яка приймає один параметр productName - назва товару.
// Функція повинна повернути
// загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const { name, price, quantity } of products) {
//     if (name === productName) {
//       totalPrice = price * quantity;
//       return totalPrice;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice('Blaster')); // 0
// console.log(calculateTotalPrice('Radar')); // 5200
// console.log(calculateTotalPrice('Droid')); // 2800
// console.log(calculateTotalPrice('Grip')); // 10800
// console.log(calculateTotalPrice('Scanner')); // 8100

// 21  ---------------------------------------

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// // Оголошена змінна highTemperatures
// // Значення змінної highTemperatures - це об'єкт
// // Оголошена змінна yesterday за допомогою деструктуризації
// // Значення змінної yesterday - це число 28
// // Оголошена змінна today за допомогою деструктуризації
// // Значення змінної today - це число 26
// // Оголошена змінна tomorrow за допомогою деструктуризації
// // Значення змінної tomorrow - це число 33
// // Оголошена змінна meanTemperature
// // Значення змінної meanTemperature - це число 29
// // Використовується синтаксис деструктуризації об'єкта highTemperatures

// 22  ----------------------------------------

// // У прогнозі максимальних температур також може бути необов'язкова властивість
// // icon - іконка погоди.
// // Заміни оголошення змінних yesterday, today, tomorrow і icon
// // однією операцією деструктуризації властивостей об'єкта highTemperatures.
// // Задай значення за замовчуванням для
// // icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23  ----------------------------------------

// // Заміни оголошення змінних
// // highYesterday, highToday, highTomorrow і highIcon
// // однією операцією деструктуризації властивостей об'єкта highTemperatures.
// // Задай значення за замовчуванням для
// // highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24  ----------------------------------------

// // Виконай рефакторинг циклу for...of таким чином,
// // щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25  ----------------------------------------

// // Ми отримали прогноз погоди на два дні,
// // з мінімальними і максимальними температурами,
// // а також необов'язковими іконками.
// // Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// // Задай значення за замовчуванням для
// // іконок,
// // змінних todayIcon  i
// // tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// 26  ----------------------------------------

// // Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// // {
// //   today: { low: 10, high: 20 },
// //   tomorrow: { low: 20, high: 30 }
// // }
// // Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //   const tomorrowHigh = forecast.tomorrow.high;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// }); // 28.5
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// }); // 37

// 27  ----------------------------------------

// // У змінній scores зберігається масив результатів тестування.
// // Використовуючи розподіл і методи Math.max() і Math.min(),
// // доповни код таким чином,
// // щоб у змінній bestScore був найвищий бал,
// //     а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// // Оголошена змінна scores
// // Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// // Оголошена змінна bestScore
// // Значення змінної bestScore - це число 93
// // Оголошена змінна worstScore
// // Значення змінної worstScore - це число 17
// // Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// // Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// 28  ----------------------------------------

// // У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // Оголошена змінна firstGroupScores
// // Значення змінної firstGroupScores - це масив [64, 42, 93]
// // Оголошена змінна secondGroupScores
// // Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// // Оголошена змінна thirdGroupScores
// // Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// // Оголошена змінна allScores.
// // Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// // Оголошена змінна bestScore
// // Значення змінної bestScore - це число 97
// // Оголошена змінна worstScore
// // Значення змінної worstScore - це число 14
// // Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// // Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// // Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// 29  ----------------------------------------

// // В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// // Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування.
// // Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// // Оголошена змінна defaultSettings
// // Значення змінної defaultSettings - це об'єкт
// // Оголошена змінна overrideSettings
// // Значення змінної overrideSettings - це об'єкт
// // Оголошена змінна finalSettings
// // Значення змінної finalSettings - це об'єкт
// finalSettings.theme // "light"
// finalSettings.public // "false"
// finalSettings.withPassword // "true"
// finalSettings.minNumberOfQuestions // 10
// finalSettings.timePerQuestion / 30
// // Для присвоєння значення змінній finalSettings використовується синтаксис ...

// 30  ----------------------------------------

// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// // text - текст завдання.
// // category - категорія завдання.
// // priority - пріоритет завдання.
// // Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// // У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// // В параметрі data гарантовано буде тільки властивість text,
// // а інші дві, category і priority, можуть бути відсутніми.
// // Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// // ------------

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
// return { completed, category, priority, ...data };
// }

// // Оголошена функція makeTask(data)
// console.log(makeTask({})) // { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }) // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }) // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }) // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// 31  ----------------------------------------

// // // Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку кількість аргументів, рахувала і повертала їх суму.

// function add(...args) {
//   let totalSum = 0;
//   for (const item of args) {
//     totalSum += item;
//   }
//   console.log(totalSum);
//   return totalSum;
// }

// // // Оголошена функція add
// // // Функція add використовує параметр args
// // // Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// add(15, 27); // 42
// add(12, 4, 11, 48); // 75
// add(32, 6, 13, 19, 8); // 78
// add(74, 11, 62, 46, 12, 36); // 241

// 32  ----------------------------------------

// // Функція addOverNum() рахує суму всіх аргументів.
// // Зміни параметри і тіло функції addOverNum() таким чином,
// // щоб вона рахувала суму тільки тих аргументів,
// // які більші за задане число.
// // Це число повинно бути першим параметром функції.

// function addOverNum(firstNumber, ...otherArgs) {
//   let total = 0;

//   for (const arg of otherArgs) {
//     //   console.log(arg);
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
// }

// addOverNum(50, 15, 27); // 0
// addOverNum(10, 12, 4, 11, 48, 10, 8); // 71
// addOverNum(15, 32, 6, 13, 19, 8); // 51
// addOverNum(20, 74, 11, 62, 46, 12, 36); // 218

// 33  ---------------------------------------

// // Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// // Доповни код функції таким чином,
// // щоб вона повертала новий масив matches,
// // в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// // Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2], тому що тільки вони є в масиві першого аргументу.

// function findMatches(arg1, ...arg2) {
//   const matches = [];
//   for (const number of arg1) {
//       if (arg2.includes(number))
//         //   console.log(number);
//       matches.push(number);
//     }
//     // console.log(matches);
//   return matches;
// }

// // Оголошена функція findMatches()
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); // [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16); // []

// 34  ----------------------------------------

// // Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// // Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// // Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldBook, newBook) {
//     return `Updating book ${oldBook} to ${newBook}`;
//   },
// };

// // Оголошена змінна bookShelf
// // Значення змінної bookShelf - це об'єкт
// // Значення властивості bookShelf.getBooks - це метод об'єкта
// console.log(bookShelf.getBooks()); ; // "Returning all books"
// // Значення властивості bookShelf.addBook - це метод об'єкта
// console.log(bookShelf.addBook('Haze')); // "Adding book Haze"
// // Значення властивості bookShelf.removeBook - це метод об'єкта
// console.log(bookShelf.removeBook('Red sunset')); // "Deleting book Red sunset"
// // Значення властивості bookShelf.updateBook - це метод об'єкта
// console.log(bookShelf.updateBook('Sands of dune', 'Dune')); // "Updating book Sands of dune to Dune"
// 35  ----------------------------------------

// // Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     let bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return;
//   },
// };

// console.log(bookShelf.books);

// bookShelf.updateBook('Haze', 'Dungeon chronicles'); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook('The last kingdom', 'Dune'); // ["Dune", "Haze", "The guardian of dreams"]

// 36  ----------------------------------------

// const atTheOldToad = {
//   potions: [],
// };

// 37  ----------------------------------------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

// 38  ----------------------------------------

// // Доповни метод addPotion(potionName) таким чином, щоб він
// // додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // Значення властивості atTheOldToad.addPotion - це метод об'єкта
// atTheOldToad.addPotion('Invisibility'); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion('Power potion'); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// 39  ----------------------------------------

// // Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     (indexProdDelete = this.potions.indexOf(potionName)),
//       this.potions.splice(indexProdDelete, 1);
// //     return this.potions.splice(this.potions.indexOf(potionName, 1));
//   },
// };

// console.log(atTheOldToad.potions);
// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта
// atTheOldToad.removePotion('Dragon breath'); // ["Speed potion", Stone skin"]
// atTheOldToad.removePotion('Speed potion'); // ["Stone skin"]

// 40  ----------------------------------------

// // Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//       let potionsIndex = this.potions.indexOf(oldName);
//       this.potions.splice(potionsIndex, 1, newName);
//     return;
//   },
// };

// 41  ----------------------------------------

// // Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// // {
// //   name: "Dragon breath",
// //   price: 700
// // }
// // Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// // getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// // addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// // removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// // updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   //   //     const nameAtTheOldToad = [];
//   //   //     const priceAtTheOldToad = [];

//   //   // for (const { name, price } of colors) {
//   //   //   nameAtTheOldToad.push(name);
//   //   //   priceAtTheOldToad.push(price);
//   //   //     }

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//       this.potions.push(newPotion);
//       // console.log(newPotion);
//     }
//   },

//     removePotion(potionName) {

//           (indexProdDelete = this.potions.indexOf(potionName)),
//             this.potions.splice(indexProdDelete, 1);
//             console.log(potionName);
//         return `Potion ${potionName} is not in inventory!`;

//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },

//   //   removePotion(potionName) {
//     //   (indexProdDelete = this.potions.indexOf(potionName)),
//     //     this.potions.splice(indexProdDelete, 1);
//   // //     return this.potions.splice(this.potions.indexOf(potionName, 1));
//   //   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.getPotions - це метод об'єкта
// atTheOldToad.getPotions() // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// // Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }); // в масиві potions останнім елементом буде цей об'єкт
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }); // в масиві potions останнім елементом буде цей об'єкт
// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); // масив potions не змінюється
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); // массив potions не змінюється
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); // повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); // повертає рядок "Error! Potion Stone skin is already in your inventory!"
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта
// atTheOldToad.removePotion("Dragon breath"); // у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion("Speed potion"); // у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// // Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// ========================================================================================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     console.log(this.potions);
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     console.log(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];

//       if (potionName === potion.name) {
//         potions.splice(i, 1);
//       }
//     }
//     // potions.splice(potionIndex, 1);
//     console.log(potionName);
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(oldName);

//       if (potionIndex === oldName) {
//         this.potions.splice(potionIndex, 1, newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.getPotions(); // [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// atTheOldToad.removePotion('Dragon breath'); // у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

// ==========================================================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//         if (newPotion.name === potion.name) {
//           console.log(
//             `Error! Potion ${newPotion} is already in your inventory!`
//           );
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//       }
//       console.log(newPotion);
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const item = this.potions[i];
//       if (potionName === item.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// // console.log(atTheOldToad.potions);

// // ---------------------------------------------------------------------------------------------

// // atTheOldToad.getPotions();
// // // для вихідного об'єкта повертає
// // [
// //   { name: 'Speed potion', price: 460 },
// //   { name: 'Dragon breath', price: 780 },
// //   { name: 'Stone skin', price: 520 },
// // ];

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// // в масиві potions останнім елементом буде цей об'єкт

// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// // в масиві potions останнім елементом буде цей об'єкт

// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт

// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // масив potions не змінюється
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // массив potions не змінюється
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// // повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// // повертає рядок "Error! Potion Stone skin is already in your inventory!"

// atTheOldToad.removePotion('Dragon breath');
// // у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion('Speed potion');
// // у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]



// ======================================

// код від ментора
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.potions[i].name) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (oldName === this.potions[i].name) {
//         return (this.potions[i].name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
