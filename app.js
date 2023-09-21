let body=document.querySelector("body");
let head=document.querySelector(".head");
let navlink= document.querySelectorAll(".navlink");
let home=document.querySelector(".home");
let navlinks=document.querySelectorAll(".nav-links");
let homeHead=document.querySelector(".home-head");
let homeCont=document.querySelector(".home-cont");
let homeButt=document.querySelector("#home-butt");
let flex=document.querySelector(".flex");
let arrow=document.querySelector(".arrow");
let service=document.getElementById("service");
let flexOne=document.querySelector(".flex-one");
let flexTwo=document.querySelector(".flex-two");
let flexThree=document.querySelector(".flex-three");
let flexFour=document.querySelector(".flex-four");

//up-arrow 
arrow.addEventListener("click",()=>
{
    document.documentElement.scrollTop=0;
})

//navbar design onscroll
window.addEventListener("scroll",()=>
{
    let scroll=window.scrollY;
    if(scroll>20)
    {
        head.classList.add("nav-links-js");
        navlink.forEach(link=>
            {
                link.classList.add("link");
                arrow.classList.add("show-arrow");
            })
    }
    
    else
    {
        head.classList.remove("nav-links-js");
        navlink.forEach(link=>
            {
                link.classList.remove("link");
                arrow.classList.remove("show-arrow");
            })
    }
})
console.log(scroll);



//navbar link change while scroll 79,755,1251,2069,2972,4638

window.addEventListener("scroll",()=>
{
    let scroll=window.scrollY;
    if(scroll>=28 && scroll<678)
    {
        navlink[0].classList.add("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[5].classList.remove("nav-links-scroll");
    }  
    else if(scroll>=678 && scroll<1172)
    {
        navlink[1].classList.add("nav-links-scroll");
        navlink[0].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[5].classList.remove("nav-links-scroll");
    }
    else if(scroll>=1172 && scroll<2018)
    {
        navlink[2].classList.add("nav-links-scroll");
        navlink[0].classList.remove("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[8].classList.remove("nav-links-scroll");
    }
    else if(scroll>=2018 && scroll<2940)
    {
        navlink[3].classList.add("nav-links-scroll");
        navlink[0].classList.remove("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[8].classList.remove("nav-links-scroll");
    }
    else if(scroll>=2940 && scroll<4638)
    {
        navlink[4].classList.add("nav-links-scroll");
        navlink[0].classList.remove("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[8].classList.remove("nav-links-scroll");
    }
    else if(scroll>=4638)
    {
        navlink[8].classList.add("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[0].classList.remove("nav-links-scroll");
        console.log(navlink[8]);
    }
    else
    {
        navlink[0].classList.remove("nav-links-scroll");
        navlink[1].classList.remove("nav-links-scroll");
        navlink[2].classList.remove("nav-links-scroll");
        navlink[3].classList.remove("nav-links-scroll");
        navlink[4].classList.remove("nav-links-scroll");
        navlink[8].classList.remove("nav-links-scroll");
    }
})

//home js while onload 

window.addEventListener("load",()=>
{
    homeHead.classList.add("home-js");
    homeCont.classList.add("home-js");
    homeButt.classList.add("home-js");
})



//animation: service-anime 0.5s linear 0s;
//visibility: visible;



