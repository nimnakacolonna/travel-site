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

// Static Numbers

const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach((counters)=>{
    counters.textContent = 0;

    incrementCounters();

    function incrementCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increment = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increment);

        if(currentNum < dataCeil){
            counters.textContent = currentNum;
            setTimeout(incrementCounters, 50);

        }else{
            counters.textContent = dataCeil;
        }
    }
})