const navbtn_open = document.querySelector("#nav_btn");
const navbtn_close = document.querySelector("#nav_close");
const nav_bar = document.querySelector("#nav_links");
const items = document.querySelectorAll(".nav_items");
let nav_status=false;

navbtn_open.addEventListener("click", ()=>{
            nav_bar.classList.add("slide_in");
            nav_bar.classList.remove("slide_out");
            items.forEach(x=>{
                x.classList.add("show");
            })
            
});

navbtn_close.addEventListener("click", ()=>{
    nav_bar.classList.add("slide_out");
    nav_bar.classList.remove("slide_in");
    items.forEach(x=>{
        x.classList.remove("show");
    })
});