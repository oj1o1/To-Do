let bar = document.querySelector("#bars")
let overlay = document.querySelector("#overlay")
let cross = document.querySelector("#cross")
let menu_items = document.querySelector(".menu_items")
function left_menu() {
    cross.classList.toggle("cross_left")
    overlay.classList.toggle("lefting")
    menu_items.classList.toggle("lefting")
}

bar.addEventListener("click", () =>{
    left_menu()
})

overlay.addEventListener("click", () =>{
    left_menu()
})

cross.addEventListener("click", () =>{
    left_menu()
})