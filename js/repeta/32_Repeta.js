// https://www.youtube.com/watch?v=nW2JV_ZX7jU&ab_channel=GoITFrontend

// =========================================
// розпилення 00:00
// =========================================

// const a = [1, 2, 3, 4, 5,]

// const bqq = {
//     ...a
// }
// console.log(bqq);

// // ------

// const bqq1 =[
//   ...a,
// ];
// console.log(bqq1);

// =========================================
// деструктиризація 32:00
// =========================================

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: false,
//   rating: 8.38,
//   stats: {
//     views: 4085,
//     likes: 5348,
//   },
// };

// const { title, author, ...rest } = book;

// // console.log(title, author);
// console.log(rest);
// // console.log(book);

// =========================================
// приклад 1:25:00
// =========================================

// магазин 1:35:00
// =========================================

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },



//   add(product) {
//     // console.table(this.items);

//     for (const item of this.items) {
//         if (item.name === product.name) {
//             // console.log('такий продукт уже є', product.name);
//             item.quantity += 1;
//             return;
//         }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },







//   remove(productName) {
//     const { items } = this; // (this.items.length === items.length) this.items[i]) деструктиризація робить посилання на 51 - items: [], а не копію тому що складний обєкт
//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];
//       if (productName === item.name) {
//         console.log('є такий продукт:', productName);
//         console.log('índex', i);

//         items.splice(i, 1);
//       }
//     }
//   },










//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     // console.log(this.items);
//     // let total = 0;

//     // for (const item, quantity of this.items) { // , quantity
//     //   total += item.price * quantity; //  * quantity
//     // }
//     // return total;
//     // ------------------
//     console.log(this.items);
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'aple red', price: 50 });
// cart.add({ name: 'aple blue', price: 40 });
// cart.add({ name: 'aple blue', price: 40 });
// cart.add({ name: 'aple blue', price: 40 });
// cart.add({ name: 'aple yelow', price: 20 });
// cart.add({ name: 'aple first', price: 5 });
// cart.add({ name: 'aple first', price: 5 });
// cart.add({ name: 'aple first', price: 5 });
// cart.add({ name: 'aple first', price: 5 });
// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('aple yelow');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());
