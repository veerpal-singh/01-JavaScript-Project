const addBtnClick = document.querySelector(".add")
const inputTask = document.querySelector("#inputTask")
const taskList = document.querySelector("#taskList")

function addTask() {
    const newTask = document.createElement("li")
    taskList.appendChild(newTask)
    const inputTaskValue = inputTask.value
    newTask.textContent = inputTaskValue
    document.querySelector("#inputTask").value = ""
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function () {
        newTask.remove()
    }
}

addBtnClick.addEventListener("click", addTask)

