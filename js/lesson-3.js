//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const name = prompt("Hello! What's your name?");
//     if (!name.trim()) {
//         alert("Enter your name, please!");
//         return;
//     }
//     return callback(name)
// }

// const greet = (name) => alert(`Hello, ${name}! How are you?`);

// console.log(letMeSeeYourName(greet));








//TODO № 2 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// id: Math.random()
// id: Date.now()
// id: new Date()
// id: Math.floor(Math.random() * 100)

// function makeProduct(name, price, callback) {
//     const product = {
//         name,
//         price,
//         id: Math.random(),
//         id: Date.now(),
//         id: new Date(),
//         id: Math.floor(Math.random() * 100)
//     }
//     return callback(product);
// }

// const showProduct = product => product;

// console.log(makeProduct("phone", 1000, showProduct));



//TODO: № 4 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//     action()
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuantity.bind(item));





//TODO: № 5 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи


// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];


// const allTopics = courses.flatMap(course => course.topics);

// const uniqueTopics = courses.filter((topic,index) => allTopics.indexOf(topic) === index);


// console.log(allTopics);
// console.log(uniqueTopics);




//TODO: № 6 на функцію конструктор ✅ =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// class User {
//     constructor(params) {
//         this.userName = params.userName;
//         this.age = params.age;
//         this.numbersOfPost = params.numbersOfPost;
//     }

//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     }
// }


// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// console.log(polly.getInfo());






//TODO: =============================================
//Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// client.changeEmail = "change_mail@gmail.com";
// console.log(client.getClientData.email);

// class Client {
//     #login
//     #email
//     constructor(login, email) {
//         this.#login = login,
//         this.#email = email
//     }

//     get login() {
//         return this.#login;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = "change_mail@gmail.com";
// console.log(client.getClientData.email);






//TODO: № 9 на class ✅ ==============================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.



// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `Name animal: ${this.name}, Type animal: ${this.type}`;
//   }

//   feed() {
//     console.log(`Feeding ${this.name}....`);
//   }
// }


// class Bird extends Animal {
//     constructor(name, type, food) {
//         super(name, type)
//         this.food = food;
//     }

//     getInfo() {
//         return `${super.getInfo}, Food:${this.food}`
//     }
// }


// class Predator extends Animal {

// }




