// TODO: ЗАДАЧА  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// const colorBtn = document.querySelector(".checkbox");
// const body = document.querySelector("body");

// const darkTheme = "dark-theme";
// const lightTheme = "light-theme";

// const THEME_KEY = "theme"

// const getTheme = localStorage.getItem(THEME_KEY);

// if (getTheme === darkTheme) {
//     body.classList.add("dark");
//     colorBtn.checked = true;
// }

// if (getTheme === lightTheme) {
//     body.classList.add("light");
//     colorBtn.checked = false;
// }


// colorBtn.addEventListener("click", () => {
//     if (colorBtn.checked === false) {
//         localStorage.setItem(THEME_KEY, lightTheme);
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     if (colorBtn.checked === true) {
//         localStorage.setItem(THEME_KEY, darkTheme);
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
// })





// TODO: ЗАДАЧА на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #task-list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.querySelector("#task-form");
const input = document.querySelector(`input[name="taskName]`);
const taskList = document.querySelector("#task-list");

const TASK_KEY = "tasks";

let tasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

form.addEventListener("submit", addTasks);

function addTasks(event) {
    event.preventDefault();
    const task = input.value.trim();

    if (task !== "") {
        tasks.push(task);
        input.value = "";
        renderTasks();
        saveTasks();
    }
}

function deleteTask(event) {
    const taskIndex = event.target.dataset.index;
    tasks.splice(taskIndex, 1);
    renderTasks();
    saveTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        const btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.dataset.index = index;
        btn.addEventListener("click", deleteTask)

        li.appendChild(btn);
        taskList.appendChild(li);

    });
}

function saveTasks() {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks))
}
