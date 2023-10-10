const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector('.navList');


menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navList.classList.toggle('active');
}