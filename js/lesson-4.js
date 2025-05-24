//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", () => {
//     const input = document.querySelector("#alertInput");
//     // return alert(input.value)
//     console.log(`Input: ${input.value}`);
// })

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const swapBtn = document.querySelector("#swapButton");
// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");

// swapBtn.addEventListener("click", () => {
//     const firstLeftInput = leftInput.value;
//     leftInput.value = rightInput.value;
//     rightInput.value = firstLeftInput;
//     return
// });


//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

// const changeBtn = document.querySelector("#changeButton");
// const changeTexts = document.querySelectorAll(".change-text");

// changeBtn.addEventListener("click", newName);

// function newName() {
//     changeTexts.forEach((item, i) => {
//         item.textContent = i + 1;
//     });
// }
// console.log(changeTexts);


//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.


// const input = document.querySelector("#passwordInput");
// const btn = document.querySelector("#passwordButton");

// btn.addEventListener("click", showPassword);

// function showPassword() {
//     if (input.type === "password") {
//         btn.textContent = "Приховати";
//         input.type = "text"
//         return
//     } else {
//         btn.textContent = "Розкрити";
//         input.type = "password"
//         return
//     }
// }



//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка
// "Збільшити" - більше на 10 пікселів.

// const decreaseBtn = document.querySelector("#decrease");
// const increaseBtn = document.querySelector("#increase");
// const box = document.querySelector("#box");

// decreaseBtn.addEventListener("click", () => {
//     box.style.width = box.offsetWidth - 10 + "px";
//     box.style.height = box.offsetHeight - 10 + "px";

// });

// increaseBtn.addEventListener("click", () => {
//     box.style.width = box.offsetWidth + 10 + "px";
//     box.style.height = box.offsetHeight + 10 + "px";

// });

// console.dir(box);


//TODO: № 6 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

const doubleNumbers = document.querySelectorAll(".listItem");
const doubleBtn = document.querySelector("#double");

doubleBtn.addEventListener("click", newNumbers);

function newNumbers() {
    doubleNumbers.forEach((number) => {
        number.textContent *= 2;
    });
}