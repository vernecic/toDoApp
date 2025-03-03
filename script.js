const buttonAdd = document.getElementById("buttonAdd");
const tasklist = document.querySelector(".tasks");
const inputField = document.getElementById("addTask");
const buttonDoneTasks = document.querySelector(".doneTasks");
const doneTasksContainer = document.querySelector(".doneTasksContainer");

let allTodos = [];

buttonAdd.addEventListener("click", () => {
  const addedTask = inputField.value;
  if (!addedTask) return; // ne moze bit prazno
  console.log(addedTask);
  const html = `<div class="newTask"><h4 class="newTaskName">${addedTask}</h4><div class="newTaskButtons"><img src="/images/done-round-svgrepo-com.svg" class="done"><img src="/images/done-round-green-svgrepo-com.svg" class="greenDone hidden" id="greenDone"><img src="/images/delete-1487-svgrepo-com.svg" class="trashCan"></div></div>`;

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
      const greenDone = parentTask.querySelector("#greenDone");
      greenDone.classList.remove("hidden");
      const grayDone = parentTask.querySelector(".done");
      grayDone.classList.add("hidden");
      parentTask.classList.add("doneTask");
    }
  }
});
