const menuIcon = document.getElementById("menu-icon"); // Selects the menu icon (bx-menu)
const closeIcon = document.getElementById("close-icon"); // Selects the close icon (bx-x)
const header = document.querySelector(".header"); // Selects the navbar containing the links
const checkbox = document.getElementById("check"); // Selects the checkbox

// menuBtn.addEventListener("click", () => {
//     menus.classList.add("display");
// });

// closeBtn.addEventListener("click", () => {
//     menus.classList.remove("display");
// });

//scroll sticky navbar 

window.addEventListener("scroll",() =>{
    if(document.documentElement.scrollTop > 20){
        header.classList.add('sticky');
    }else{
        header.classList.remove("sticky");
    }

    
})