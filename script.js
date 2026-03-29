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