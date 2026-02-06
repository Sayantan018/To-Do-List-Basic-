const taskInp = document.querySelector("#myInput")
const addBtn = document.querySelector(".addBtn")
const tasks = document.querySelector(".tasks")
const noTask = document.querySelector(".noTask")

addBtn.addEventListener("click", () => {
    
    if (taskInp.value.trim() === ""){
        alert("please write something first")
        return
    }

    let task = document.createElement("div")
    task.classList.add("task")
    task.innerHTML = `
                        <h3 class="textEl">${taskInp.value}</h3>
                        <button class="deleteBtn">
                        <i class="ri-delete-bin-6-line"></i>
                        </button>
                        <button class="editBtn">
                        <i class="ri-edit-2-line"></i>
                        </button>
                    `
    let textEl = task.querySelector(".textEl")
    textEl.addEventListener("dblclick", () =>{
        textEl.style.textDecoration = "line-through";
    })
    
    let deleteBtn = task.querySelector(".deleteBtn")
    deleteBtn.addEventListener("click", () => {
        task.remove()

        if (document.querySelectorAll(".task").length === 0) {
            noTask.style.display = "block"
        }
    })

    let editBtn = task.querySelector(".editBtn")
    editBtn.addEventListener("click", (e) =>{
        textEl.contentEditable = 'True'
        textEl.focus()
    })

    tasks.appendChild(task)
    taskInp.value = ""
    noTask.style.display = "none"
})
