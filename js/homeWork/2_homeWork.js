// 1  ----------------------------------------
// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// 2  ----------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// 3  ----------------------------------------
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// 4  ----------------------------------------

// const fruits = [
//   "apple",
//   "plum",
//   "pear",
//   "orange",
// ];

// 5  ----------------------------------------

// const fruits = [
//   "apple",
//   "plum",
//   "pear",
//   "orange",
// ];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// fruits[0];
// fruits[1];
// fruits[fruits.length];

// 6  ----------------------------------------

// const fruits = [
//   "apple",
//   "plum",
//   "pear",
//   "orange",
// ];
// fruits[1] = "peach";
// fruits[3] = "banana";

// 7  ----------------------------------------

// const fruits = [
//   "apple",
//   "peach",
//   "pear",
//   "banana",
// ];
// const fruitsArrayLength = fruits.length;

// 8  ----------------------------------------

// const fruits = [
//   "apple",
//   "peach",
//   "pear",
//   "banana",
// ];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// 9  ----------------------------------------

// function getExtremeElements(array) {
//   array = [array[0], array[array.length - 1]];
//   return array;
// }

// 10  ----------------------------------------

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// 11  ----------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
// const calculateEngravingPrice =
//   message.split(` `).length * pricePerWord;

// return calculateEngravingPrice
// }

// 12  ----------------------------------------

// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);
//   return string;
// }

// 13  ----------------------------------------

// function slugify(title) {
//   //   const slugify = title.toLowerCase();
//   //   console.log(slugify);
//   //   const word = slugify.split(' ');
//   //   console.log(word);
//   //   const slug = word.join('-');
//   //   console.log(slug);
//   //   return slug;

//   const slugify = title.toLowerCase().split(' ').join('-');
//   return slugify;
// }

// console.log(slugify('Arrays for begginers')); // повертає "arrays-for-begginers"
// console.log(slugify('English for developer')); // повертає "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // повертає "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// 14  ----------------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15  ----------------------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// 16  ----------------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//   // console.log(makeArray);
//   allArray = firstArray.concat(secondArray);
//   console.log(allArray);
//     if (allArray.length > maxLength ) {
//         allArray = allArray.slice(0, maxLength);
//         // console.log(allArray);
//         return allArray;
//     }
//     return allArray;
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); //повертає ["Mango", "Poly", "Ajax"]
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); //повертає ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); //повертає ["Mango", "Ajax", "Chelsea"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); //повертає ["Earth", "Jupiter"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); //повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); //повертає []
// makeArray(); //з випадковими масивами і випадковим числом повертає правильний масив

// 17  ----------------------------------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// 18  ----------------------------------------

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
// }
// console.log(sum);
// return sum;
// }

// calculateTotal(3);
// calculateTotal(24);
// calculateTotal();

// 19  ----------------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// 20  ----------------------------------------

// function calculateTotalPrice(order) {
//     let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];

//     // console.log(total);
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([12, 845, 347, 4]);

// 21  ----------------------------------------

// function findLongestWord(string) {
//   //   console.log(string);

//   const stringToArrey = string.split(' ');
//   // console.log(stringToArrey);

//   let longestWord = '';

//   for (const word of stringToArrey) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog'); //повертає jumped
// findLongestWord('Google do a roll'); //повертає Google
// findLongestWord('May the force be with you'); //повертає force
// findLongestWord(); //з випадковим рядком повертає правильне значення

// 22  ----------------------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3); // [1, 2, 3]
// createArrayOfNumbers(14, 17); // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34); // [29, 30, 31, 32, 33, 34]
// createArrayOfNumbers(); // з випадковими min і max повертає правильний масив

// 23  ----------------------------------------

// function filterArray(numbers, value) {
//   let newArrey = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArrey.push(numbers[i]);
//     }
//   }

//   console.log(newArrey);
//   return newArrey;
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // [5]
// filterArray([1, 2, 3, 4, 5], 5); // []
// filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
// filterArray(); // з випадковим масивом і числом повертає правильний масив

// 24  ----------------------------------------

// function checkFruit(fruit) {
//     const fruits = ['apple', 'plum', 'pear', 'orange'];

//     console.log(fruits.includes(fruit));
//   return fruits.includes(fruit);
// }

// checkFruit('plum'); // true
// checkFruit('mandarin'); // false
// checkFruit('pear'); // true
// checkFruit('Pear'); // false
// checkFruit('apple'); // true
// checkFruit(); // з випадковим словом повертає правильне значення boolean

// 25  ----------------------------------------

// function getCommonElements(array1, array2) {
//     let newArray = [];
//     for (const item of array1) {
//         if (array2.includes(item))
//             newArray.push(item);
//         console.log(array2.includes(item));
//     }

// }

// getCommonElements([1, 2, 3], [2, 4]) // повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) // повертає []

// 26  ----------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const item of order) {

// // (let i = 0; i < order.length; i += 1)
//     total += item;
//   }

//   // Change code above this line
//     console.log(total);
//   return total;
// }

// calculateTotalPrice([164, 48, 291]) // повертає 503

// 27  ----------------------------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//     const filteredNumbers = [];

// for (const item of numbers) {

//     const number = item;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
// console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) //повертає [5]

// 28  ----------------------------------------

// const a = 3 % 3; //  a - це число 0
// const b = 4 % 3; // b - це число 1
// const c = 11 % 4; // c - це число 3
// const d = 12 % 7; // d - це число 5
// const e = 8 % 6; // e - це число 2

// 29  ----------------------------------------

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// 30  ----------------------------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//     //   console.log(number);
//     break;
//   }
// }

// 31  ----------------------------------------

// function findNumber(start, end, divisor) {
//   let result;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       result = i;
//       return result;
//     }
//   }
// }

// findNumber(2, 6, 5) //повертає 5
// findNumber(8, 17, 3) //повертає 9
// findNumber(6, 9, 4) //повертає 8
// findNumber(16, 35, 7) //повертає 21
// findNumber() //з випадковим набором чисел повертає правильний результат
// //В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// 32  ----------------------------------------

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
