const header = document.querySelector('header');

window.onscroll = function(){
    if(window.scrollY >= 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

const primaryNav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".primary-navigation img");

const formContent= document.querySelector(".request-form-container");
const formOpen = document.querySelector(".request-button");
const formClose = document.querySelector(".close-form");

navToggle.addEventListener("click", () => {
    const navVisible = primaryNav.getAttribute('visible');

    var navIsTrue = (navVisible === 'true');

    primaryNav.setAttribute('visible', !navIsTrue);
})

formOpen.addEventListener("click", () => {
    const formVisible = formContent.getAttribute('visible');
    var formIsTrue = (formVisible ==='true');
    formContent.setAttribute('visible', !formIsTrue);
})

formClose.addEventListener("click", () => {
    const formVisible = formContent.getAttribute('visible');
    var formIsTrue = (formVisible ==='true');
    formContent.setAttribute('visible', !formIsTrue);
})