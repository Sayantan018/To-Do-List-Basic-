let list = document.querySelector("ul")
let input = document.querySelector("#myInput")
let add = document.querySelector(".addBtn")
add.addEventListener("click",(e)=>{
    console.log(input.value)
    let listed = document.createElement("li")
    listed.innerText = input.value
    listed.classList.add("colorchange")
    list.appendChild(listed)


})

//console.log(add)