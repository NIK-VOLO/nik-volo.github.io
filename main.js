const header = document.querySelector('header');

window.onscroll = function(){
    if(window.scrollY >= 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY >= 500){
        info.classList.add('active');
    }
}

const info = document.querySelector('.sec-info .horizontal-scroll');

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
})

formOpen.addEventListener("click", () => {
    window.scrollTo(0,0);
    toggleForm();
})

formClose.addEventListener("click", () => {
    toggleForm();
})