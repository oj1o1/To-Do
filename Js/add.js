let add_btn = document.querySelector(".add_btn")
let ul = document.querySelector("#ul")
let add_inp = document.querySelector(".add_inp")
let lists = document.querySelectorAll(".li")

add_btn.addEventListener("click", () => {

    if (add_inp.value == "") {
        alert("Please enter item name")
    } else {
        
        ul.innerHTML += 
        `<li class= "li">
                <input type="checkbox" class="check">
                <h5 class="nam_taker">${add_inp.value}</h5>
    
            <i class="fas fa-trash close"></i>
        </li>
        `
        add_inp.value = ""
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";

    }
    }

})



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}