// ===========================================================
// 2
// ===========================================================

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Ultracheese', deliverPizza));

// // Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// makeMessage("Royal Grand", makePizza) //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza) //повертає рядок "Delivering Ultracheese pizza."

// ===========================================================
// 3
// ===========================================================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
// //   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function makePizza(pizzaName) {
// //   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// });

// // makePizza("Ultracheese");//передана функція eatPizza з єдиним параметром pizzaName

// ===========================================================
// 4
// ===========================================================

// Необхідно написати логіку обробки замовлення піци.
// Виконай рефакторинг методу order таким чином,
// щоб він приймав другим і третім параметром два колбеки
// onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
// метод order повинен повертати результат виклику колбека onError,
// передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."

// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.find(pizzas => pizzas === pizzaName)) {
//       console.log(pizzaName);
//       return onSuccess(pizzaName);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // --------------------------------
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// ===========================================================
// 5
// ===========================================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }

//     orderedItems.forEach(number => totalPrice = totalPrice + number);

//     console.log(totalPrice);
//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]); // 138
// calculateTotalPrice([164, 48, 291]); // 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // 1116

// ===========================================================
// 6
// ===========================================================

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number)
//         }
//     })
//     console.log(filteredNumbers);
//     return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); //повертає [5]
// filterArray([1, 2, 3, 4, 5], 5); //повертає []
// filterArray([12, 24, 8, 41, 76], 38); //повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); //повертає [24, 41, 76]

// ===========================================================
// 7
// ===========================================================

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(
//       firstArray => {
//           if (secondArray.includes(firstArray)) {
//               commonElements.push(firstArray);
//           }
//       });

//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]); //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); //повертає []

// ===========================================================
// 7
// ===========================================================

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//     console.log(quantity * pricePerItem);
//   return quantity * pricePerItem;
// }

// calculateTotalPrice(5, 100) //повертає 500
// calculateTotalPrice(8, 60)// //овертає 480
// calculateTotalPrice(3, 400) //повертає 1200

// ===========================================================
// 8
// ===========================================================

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// ===========================================================
// 9
// ===========================================================

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ===========================================================
// 10
// ===========================================================

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item =>
//     totalPrice += item
//   );

//   return totalPrice;
// }
// // Change code above this line

// ===========================================================
// 11
// ===========================================================

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// ===========================================================
// 12
// ===========================================================
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// ===========================================================
// 13
// ===========================================================

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(number => {
//       number % 2 === 0
//           ? newArray.push(number + value)
//           : newArray.push(number);
//   });

//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10); //пов//ертає новий масив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10); //повертає новий масив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100); //повертає новий масив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100); //повертає новий масив[144, 13, 81, 192, 136, 154]

// ===========================================================
// 14
// ===========================================================

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);
// console.log(planets);
// // const planetsLengths = planets => ({planets.map(lanet).length});

// // Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// // Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// // Для перебирання масиву планет використаний метод map()

// ===========================================================
// 15
// ===========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// ===========================================================
// 16
// ===========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// ===========================================================
// 17
// ===========================================================
// const getUserNames = users => {
//   const userNamesArray = [];

//   users.map(user => {
//     userNamesArray.push(user.name);
//   });

//   return userNamesArray;
// };
// ===========================================================
// 18
// ===========================================================
// const getUserEmails = users => {
//   const newArray = [];
//   users.map(user => {
//     newArray.push(user.email);
//   });

//   return newArray;
// };
// ===========================================================
// 19
// ===========================================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// ===========================================================
// 20
// ===========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books
//   .flatMap(book => book.genres)
//   .filter((item, index, array) => array.indexOf(item) === index);
// // const uniqueGenres = allGenres.filter((item, index, array) => array.indexOf(item) === index);

// // console.log(
// //   allGenres.filter((item, index, array) => array.indexOf(item) === index)
// // );
// console.log(allGenres);
// // console.log(uniqueGenres);

// // Оголошена змінна books
// // Значення змінної books - це масив об'єктів
// // Оголошена змінна allGenres
// // allGenres // це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// // Оголошена змінна uniqueGenres
// // uniqueGenres // це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// // Для обчислення значення змінної allGenders використаний метод flatMap()
// // Для обчислення значення змінної uniqueGenres використаний метод filter()

// ===========================================================
// 21
// ===========================================================
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// // Значення змінної MIN_RATING - це число 8
// // Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// // Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// // Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"

// ===========================================================
// 22
// ===========================================================
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor);

// "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony

// ===========================================================
// 23
// ===========================================================
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const usersAgeArrays = [];
//   usersAgeArrays.push(
//     ...users.filter(user => user.age > minAge && user.age < maxAge)
//   );
//   return usersAgeArrays;
// };

// getUsersWithAge(['Ross Vazquez', 'Elma Head', 'Carey Barr'], 20, 30);

// ===========================================================
// 24
// ===========================================================

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));
//    console.log(getUsersWithFriend);

// // Change code above this line

// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony

// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony

// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ===========================================================
// 25
// ===========================================================

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];


// Change code below this line
const getFriends = users.flatMap(user => user.friends);
   console.log(getFriends);

// Change code above this line


// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// ===========================================================
// 26
// ===========================================================
