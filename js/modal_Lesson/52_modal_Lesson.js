// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

// -----------------------------------------------------------------

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }


// -----------------------------------------------------------------

// const animal = {
//   eats: true,
//   eatsa: false,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.bark = false;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// -----------------------------------------------------------------

// const animal = {
//   eats: true,
//   eats1: true,
//   eats2: true,
//   eats3: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;
// dog.barks1 = false;
// dog.barks2 = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks', 'barks1', 'barks2']

// -----------------------------------------------------------------

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість