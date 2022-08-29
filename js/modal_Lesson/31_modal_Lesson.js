// Об'єкти
// -----------------------------------------
// Створення об'єкта
// -----------------------------------------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// -----------------------------------------
// Вкладені властивості
// -----------------------------------------
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// -----------------------------------------
// Звернення до властивостей через крапку
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//     rating: 8.38,

// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// -----------------------------------------
// Звернення до вкладених властивостей
// -----------------------------------------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// // const location = user.location;
// // console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const hobbies = user.hobbies;
// console.log(hobbies[1]);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// -----------------------------------------
// Звернення до властивостей через квадратні дужки
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// -----------------------------------------
// Зміна значення властивості
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");
// book.genres.push('hi hi hi');
// book.genres.push('hihi');

// console.log(book);
// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// -----------------------------------------
// Додавання властивостей
// -----------------------------------------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'it', `fr`];
// book.ivan = 'osadchuk';

// console.log(book);
// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'it']

// -----------------------------------------
// Короткі властивості
// -----------------------------------------

// const names = "Генрі Сибола";
// const age = 25;

// const user = {
//   names: names,
//   age: age,
// };

// console.log(user.names); // "Генрі Сибола"
// console.log(user.age); // 25

// ---------

// const names = 'Генрі Сибола';
// const age = 25;
// const ivan = ['osadchuk', 'mykolayovych'];

// const user = {
//   names,
//   age,
//   ivan,
// };

// console.log(user.names); // "Генрі Сибола"
// console.log(user.age); // 25
// console.log(user.ivan); // 25
// console.log(user);

// -----------------------------------------
// Обчислювальні властивості
// -----------------------------------------

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // 'Генрі Сибола'
// // --------------

// const propName1 = "name1";
// const user1 = {
//   age: 251,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName1]: "Генрі Сибола1",
// };

// console.log(user1.name1); // 'Генрі Сибола'

// -----------------------------------------
// Методи об'єкта
// -----------------------------------------

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// console.log(bookShelf);

// -----------------------------------------
// this Доступ до властивостей об'єкта в методах !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// -----------------------------------------

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// -------------

// const bookShelf = {
//   books: ["The Last Kingdom"],

//   getBooks() {
//     console.log(this.books);
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//     console.log(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     console.log(bookIndex);
    
//     this.books.splice(bookIndex, 1);
//     console.log(bookName);
//   },
// };

// bookShelf.getBooks(); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// bookShelf.getBooks(); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// bookShelf.getBooks(); // ['The Last Kingdom', 'Dream Guardian']

// -------------

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// =========================================
// Перебирання об'єкта
// =========================================
// Цикл for...in
// -----------------------------------------

// for (key in object) {
//   // інструкції
// }
// -----------------------------------------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key, `:`, book[key]);
//   // Значення властивості з таким ключем
// //   console.log(book[key]);
// }

// -----------------------------------------
// Метод hasOwnProperty() ??????????????????????????
// -----------------------------------------

// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log('dog -', dog); // {name: 'Манго'}
// console.log('name -', dog.name); // 'Манго'
// console.log('legs -', dog.legs); // 4
// console.log('animal', animal);

// -----------------------------------------
// Object.keys();
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// -----------------------------------------

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// // console.log(keys);

// for (const key of keys) {
//   //   // Ключ
//   //   console.log(key);
//   //   // Значення властивості
//   //   console.log(book[key]);
//   console.log(`${key}: ${book[key]}`);
// }

// -----------------------------------------
// Object.values()
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// -----------------------------------------

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// -----------------------------------------
// Object.entries()
// -----------------------------------------

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// =========================================
// Масив об'єктів
// =========================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];

// -----------
    
// for (const book of books) {
  // Об'єкт книги
  //   console.log(book);
  // Назва
  //   console.log(book.title);
  //   // Автор
  //   console.log(book.author);
  //   // Рейтинг
  //   console.log(book.rating);

// ----------

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// ----------

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2
