// theme change
const theme_btn = document.querySelector(".theme_btn");
let num = 0;

theme_btn.addEventListener("click",()=>{
    if(num === 0){
    theme_btn.classList.remove("ri-sun-line");
    theme_btn.classList.add("ri-moon-fill");
    document.documentElement.setAttribute("data-theme","dark");
    num = 1;
    }
   else if(num === 1){
    theme_btn.classList.add("ri-sun-line");
    theme_btn.classList.remove("ri-moon-fill");
    document.documentElement.setAttribute("data-theme","light");
    num = 0;
    }
})