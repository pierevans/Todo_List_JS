
let value = document.getElementById("input").value
let button = document.getElementsByClassName("button")
let ul = document.querySelector(".lists")
let text = document.querySelector(".checkbox-text")



button.addEventListener("click", (e)=> {
    text.innerText = value
})