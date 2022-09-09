'use strict';

// https://youtu.be/2Dd5Q2L457o

// 0:20 прототип, цепочка прототипов
// 11:00 использование Object.setPrototypeOf() - плохая практика (заставить перезаписать прототип динамически "на лету")
// 11:30 hasOwnProperty
// 12:00 привязываем прототип - Object.create()
// 18:20 итог по цепочкам прототипов
// 25:20 алгоритм поиска свойства в цепочке прототипов
// 28:00 Основы ООП (на примере автомобиля): класс, экземпляр (объект), интерфейс (набор доступных методов)
// 31:40 функция конструктор Car (имя существительное, в единственном числе, с большой буквы)
// 33:10 оператор new
// 34:00 если функция вызывается через new, создается пустой объект
// 34:30 функция вызывается в контексте созданного объекта, то есть в this записывается ссылка на него
// 35:00 ссылка на объект возвращается в место вызова new
// 40:00 объект настроек (в параметры функции записывает объект)
// 45:15 добавляем метод на машины для изменения цен
// 47:50 в свойство this._proto_ записывается ссылка на объект Car.prototype, то есть Car.prototype это ПРОТОТИП будущего объекта (экземпляра)
// 57:00 пример с User (меняем email)
// 1:04:25 итог
// 1:13:00 статические свойства и методы
// 1: 26: 50 пример использования прототипов, классов - плагины(счетчик)

// ==========================================================

// // class User {
// //   constructor({ email, password } = {}) {
// //     this.email = email;
// //     this.password = password;
// //   }
// //   changeEmail(newMail) {
// //     this.email = newMail;
// //   }
// //   changePassword(newPassword) {
// //     this.password = newPassword;
// //   }
// // }

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// // User.prototype.changePassword = function (newPassword) {
// //   this.password = newPassword;
// // };



// const mango = new User
//     ({
//   email: 'mango@gmail.com',
//   password: 123456,
// });

// // const mangos = new User({
// //   email: 'smango@gmail.com',
// //   password: 12345666,
// // });

// mango.changeEmail('my new email@ivan');
// // mango.changeEmail('etnhsdfagserhmail@ivan');
// // mangos.changePassword('drjdf');

// console.log(mango);
// // console.log(mangos);