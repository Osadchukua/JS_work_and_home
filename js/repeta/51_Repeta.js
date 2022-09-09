// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         // console.log('showTag -> this', this.tag);
//     }
// }

// user.showTag()

// const xyz = user.showTag;

// xyz()

// =========================================================================

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow');

// const hat = {
//   color: 'blue',
//   updateColor: updateColor,
// };

// console.log(hat.updateColor);

// updateColor('orange');

// =========================================================================

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this -', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const udateCounter = function (value, operation) {
//     operation(value);
// };

// udateCounter(10, counter.increment.bind(counter));
// udateCounter(5, counter.decrement.bind(counter));

// console.log(counter);

// =========================================================================

// const changeColor = function (color) {
//   console.log('changeColor -> this:', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange1');
// changeColor.call(hat, 'orange2');
// changeColor.call(hat, 'orange3');
// changeColor.call(hat, 'orange4');

// console.log(hat);
