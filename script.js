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
