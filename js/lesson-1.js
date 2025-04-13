// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник

// if (number) {
//     const a = 10;
//     console.log(a===10 ? `Вірно` : 'Невірно');
// }



//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const time = 15;
// if (time <= 15) {
//     console.log(1);
// } else if (time <= 30) {
//     console.log(2);
// } else if (time <= 45) {
//     console.log(3);
// } else {
//     console.log (4)
// }



//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = "1";

// switch (num) {
//     case "1":
//         result = "зима";
//         break;
//     case "2":
//         result="весна";
//         break;
//     case "3":
//         result = "літо";
//         break;
//     case "4":
//         result = "осінь";
//         break;
//     default:
//         result = "Oops! It's a mistake!";
// }

// console.log(result);




//TODO: № 5 на while ===================================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let a = 0;

// while (a <= 50) {
//     console.log(a);
//     a += 1;
// }

// console.log(a);



//TODO: № 6 на for ===================================
//За допомогою циклу for додайте всі парні числа від min до max

// const min = 0;
// const max = 50;
// let sum = 0;

//     for (let i = min; i < max; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
// }
    
// console.log(sum);



// TODO: № 7 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 50;
// const min = 0;
// let sum = 0;

// for (let i = 50; i > 0; i--) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);
 

// Ще інший варіант:
// for (let i = max; i >= min; i -= 1) {
//   // практика від поганого
//   if (i % 2 !== 0) {
//     // console.log("непарні i =", i);
//     continue;
//   }
//   console.log("парні i =", i);
//   total += i;
//   // інший вариіант
//   //      if (i % 2 === 0) {
//   //     console.log("парні i =", i);
//   //     total += i;
//   //     continue;
//   //   }
//   //   console.log("непарні i =", i);
// }





//TODO: № 8  =========================================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = "Opera";

if (browser === 'Edge') {
    alert ("You've got the Edge!");
} else if (browser === "Chrome"|| browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert ("Okay we support these browsers too");
} else {
    alert ("We hope that this page looks ok!");
}

console.log(browser);

