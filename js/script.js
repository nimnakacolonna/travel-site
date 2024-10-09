const menus = document.querySelector("navbar");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});