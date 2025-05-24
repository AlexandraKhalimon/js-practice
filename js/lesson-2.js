//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];


//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// console.log(calculateAverage(10, 10, 20, 200));

// function calculateAverage (...args) {
//     let sum = 0;
//     let averageNumber = 0;
//     for (const arg of args) {
//         sum += arg;
//         averageNumber = sum / args.length;
//     }
//     return averageNumber;
// }

// console.log(calculateAverage(10, 10, 20, 200))




//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисело з a і b.

// function min (a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log (min(50, 25));
// console.log (min(5, 19));





//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function someArr(array) {
//     let newArr = [];
//     for (let i = 0; i < someArr.length-2; i += 1) {
//     newArr.push(array[i] + array[i+1])
//     }
//     return newArr;
// }

// console.log(someArr[22, 11, 34, 5, 12, 13, 14, 15]);



//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']


// const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// console.log(array);





//TODO: № 6 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}:${user[key]}`);
// }




//TODO: № 7 ==============================================================
// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.
// Якщо объект salaries пустий, тоді результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);


// let values = Object.values(salaries)




//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function getBool(obj, key) {
//     return Object.keys(obj).includes(key);
// }

// console.log(getBool(obj, "name"));





//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2
// треба повертати об'єкт

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (typeof key === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(menu);

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
        
//     }
// }







