// theme change
const theme_btn = document.querySelector(".theme_btn");

theme_btn.addEventListener("click",()=>{
        changeTheme();
});

function applyTheme(){
     let curTheme;
     if(localStorage.getItem("portfoliotheme")){
          curTheme = localStorage.getItem("portfoliotheme");
          if(curTheme === "light")
          {
               applyLightTheme();
          }
          else if(curTheme === "dark"){
               applydarkTheme();
          }
     }
     else{
          localStorage.setItem("portfoliotheme","light");
          applyTheme();
     }
}

function changeTheme(){
     let curTheme = localStorage.getItem("portfoliotheme");
     if(curTheme === "light"){
          applydarkTheme();
     }
     else if(curTheme === "dark"){
          applyLightTheme();
     }
}

function applyLightTheme(){
       theme_btn.classList.add("ri-sun-line");
       theme_btn.classList.remove("ri-moon-fill");
       document.documentElement.setAttribute("data-theme","light");
       localStorage.setItem("portfoliotheme","light");
}

function applydarkTheme(){
     theme_btn.classList.remove("ri-sun-line");
     theme_btn.classList.add("ri-moon-fill");
     document.documentElement.setAttribute("data-theme","dark");
     localStorage.setItem("portfoliotheme","dark");
}

applyTheme();

//title web developer prof
let prof = document.querySelector(".my_prof");
let str = "Web Developer";
let index = 0;

function print(){
      if(index<str.length){
        prof.innerHTML = prof.innerHTML+str[index];
      index++;
      setTimeout(print,150);
     }else{
    setTimeout(dlt,300);
     }
      
}
print();

function dlt(){
     if(index>0){
      prof.innerHTML = str.substring(0,index-1);
      index--;
      setTimeout(dlt,100);
     }
     else{
        setTimeout(print,100);
     }
}

//cv button
let cv_btn = document.querySelector(".left_btn");
let noti_ok_btn = document.querySelector(".cv_ok_btn");
let notification_box = document.querySelector(".cv-notification");

cv_btn.addEventListener("click",()=>{
     shownotification();
})

noti_ok_btn.addEventListener("click",()=>{
     removenotification();
})

function shownotification(){
     notification_box.classList.add("display_notification_bar");
}

function removenotification(){
     notification_box.classList.remove("display_notification_bar");
}


// nav bar active status on scroll and click

let sections = document.querySelectorAll("section");
let navs = document.querySelectorAll(".navTag");

window.addEventListener("scroll",()=>{
     setActiveNav();
})

navs.forEach((nav)=>{
     nav.addEventListener("click",()=>{
          setActiveNav();
     })
})

function setActiveNav(){
     let scrollY = window.scrollY + 100;
     let current = "";

     sections.forEach((section)=>{
        let start = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if(scrollY >= start && scrollY < start + height){
           current = id;
           
           navs.forEach((nav)=>{
              let navId = nav.getAttribute("href");
              nav.classList.remove("active");
              if(navId === "#" + current){
               nav.classList.add("active");
              }
           })

        }
     })
}

setActiveNav();