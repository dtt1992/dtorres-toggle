// Recuperamos la clase toggleBtn del html
let toggleBtn = document.querySelector(".toggleBtn")
// Recuperamos la clase container del html
let container = document.querySelector(".container")

toggleBtn.onclick = function(){
    // Declaramos la clase active
    container.classList.toggle("active")
}