// =========================================================
// Контекст виконання функції "this"
// =========================================================
// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
// const petya = {
//   username: 'Petya',
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// -----------------------------------------------------------

// const bookShelf = {
//   authors: ['Бернард Корнуелл', 'Роберт Шеклі'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]

// bookShelf.addAuthor('Ли Таниghт');
// bookShelf.addAuthor(['Ли Танthnstиghт', 'dghs', 'dghs', 'dghs', 'dghs']);

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// =========================================================
// Правила визначення this
// =========================================================
// this у глобальній області видимості
// -------------
// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" і undefined з "use strict"

// -----------------------------------------------------------
// this в методі об'єкта
// -------------
// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// -----------------------------------------------------------
// ????????????????????????????????????????????????????????????????
// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: 'Mango',
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// -----------------------------------------------------------
// this в callback-функціях
// -------------

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// -----------------------------------------------------------
// this у стрілочних функціях
// -------------

// const showThis = () => console.log('this in showThis: ', this);

// showThis(); // this in showThis: window

// const user = { username: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// -------------

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// =========================================================
// Методи функцій
// =========================================================
// // Метод call()
// -------------

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// -----------------------------------------------------------
// Метод apply
// -------------

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго ffgasfgfgdfgdfgfg",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

// -----------------------------------------------------------
// Метод bind() ???????????????????????????????????/
// -------------

// function greet(clientName) {

//   console.log(`${clientName}, ласкаво просимо в «${this.service}».`);
  
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манhjm,gго'); // "Манго, ласкаво просимо в «Steam»."

// // const gmail = { service: 'Gmail' };
// // const gmailGreeter = greet.bind(gmail);
// // gmailGreeter('Полі'); // "Полі, ласкаво просимо в «Gmail»."

// -----------------------------------------------------------
// bind() і методи об'єкта ???????????????????????????????????/
// -------------

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.