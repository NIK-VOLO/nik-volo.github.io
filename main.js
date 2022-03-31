const header = document.querySelector('header');
var scrolled = false;
var menuOpen = false;

const info = document.querySelector('.sec-info .animated');

window.onscroll = function(){
    if(window.scrollY >= 250){
        header.classList.add('active');
        scrolled = true;
    }else{
        if(!menuOpen){
            header.classList.remove('active');
        }
        scrolled = false;
    }

    if(window.scrollY >= 500){
        info.classList.add('active');
    }
}



// window.onscroll = function(){
//     if(window.scrollY >= 500){
//         info.classList.add('active');
//     }else{
//         info.classList.remove('active');
//     }
// }

const body = document.querySelector('body');

const primaryNav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".primary-navigation img");

const formContent= document.querySelector(".request-form-container");
const formOpen = document.querySelector(".request-button");
const formClose = document.querySelector(".close-form");

function toggleForm(){ 
    const formVisible = formContent.getAttribute('visible');
    var formIsTrue = (formVisible ==='true');
    formContent.setAttribute('visible', !formIsTrue);

    const scrollEnabled = body.getAttribute('scroll-enabled');
    var scrollIsTrue = (scrollEnabled === 'true');
    body.setAttribute('scroll-enabled', !scrollIsTrue);
}

navToggle.addEventListener("click", () => {
    const navVisible = primaryNav.getAttribute('visible');

    var navIsTrue = (navVisible === 'true');

    primaryNav.setAttribute('visible', !navIsTrue);
    
    if(!navIsTrue){
        header.classList.add('active');
        navToggle.src = "./img/xmark-solid.svg"
        menuOpen = true;
    }else{
        if(!scrolled){
            header.classList.remove('active');
        }
        menuOpen = false;
        navToggle.src = "./img/bars-solid.svg"
    }
    
})

formOpen.addEventListener("click", () => {
    window.scrollTo(0,0);
    toggleForm();
})

formClose.addEventListener("click", () => {
    toggleForm();
})