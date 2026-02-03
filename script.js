const taskInp = document.querySelector("#myInput")
const addBtn = document.querySelector(".addBtn")
const tasks = document.querySelector(".tasks")
const noTask = document.querySelector(".noTask")

addBtn.addEventListener("click", () => {
    let task = document.createElement("div")
    task.classList.add("task")
    task.innerHTML = `
                        <h3>${taskInp.value}</h3>
                        <button class="deleteBtn">
                        <i class="ri-delete-bin-6-line"></i>
                        </button>
                    `

    let deleteBtn = task.querySelector(".deleteBtn")
    deleteBtn.addEventListener("click", () => {
        task.remove()

        if (document.querySelectorAll(".task").length === 0) {
            noTask.style.display = "block"
        }
    })

    tasks.appendChild(task)
    taskInp.value = ""
    noTask.style.display = "none"
})
