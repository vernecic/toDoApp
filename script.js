const buttonAdd = document.getElementById("buttonAdd");
const tasklist = document.querySelector(".tasks");
const inputField = document.getElementById("addTask");
const buttonDoneTasks = document.querySelector(".doneTasks");
const doneTasksContainer = document.querySelector(".doneTasksContainer");
let allTodos = [];

let doneTodos = [];

buttonAdd.addEventListener("click", () => {
  const addedTask = inputField.value;
  if (!addedTask) return; // ne moze bit prazno
  console.log(addedTask);
  const html = `<div class="newTask"><h4>${addedTask}</h4><div class="newTaskButtons"><img src="/images/done-round-svgrepo-com.svg" class="done"><img src="/images/delete-1487-svgrepo-com.svg" class="trashCan"></div></div>`;

  tasklist.insertAdjacentHTML("beforeend", html); // bitno mi je ovdje bilo beforeend mamicu mu
  allTodos.push(addedTask);
  inputField.value = "";
  console.log(allTodos);
});

tasklist.addEventListener("click", (event) => {
  if (event.target.classList.contains("trashCan")) {
    const parentTask = event.target.closest(".newTask");
    if (parentTask) {
      parentTask.remove();
    }
  }
  if (event.target.classList.contains("done")) {
    const parentTask = event.target.closest(".newTask");
    if (parentTask) {
      const doneTask = parentTask.querySelector("h4").textContent; // IME TOG FAKEN TASKA
      doneTodos.push(doneTask);
      parentTask.remove();
    }
  }
});

const displayDoneTasks = function () {
  doneTasksContainer.innerHTML = "";
  doneTodos.forEach((task) => {
    const doneHtml = `<div class="doneTask">${task}</div>`;

    doneTasksContainer.insertAdjacentHTML("beforeend", doneHtml);
    doneTasksContainer.classList.remove("hidden");
  });
};

buttonDoneTasks.addEventListener("click", displayDoneTasks);
