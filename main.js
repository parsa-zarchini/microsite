const menuButton = document.getElementById("menuButton");

console.log(menuButton);

const ul = document.querySelector(".nav-wrapper")
console.log(ul);

menuButton.addEventListener("click", () => (
    ul.classList.toggle("show")
))