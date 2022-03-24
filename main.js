const header = document.querySelector('header');

window.onscroll = function(){
    if(window.scrollY >= 10){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

const primaryNav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".primary-navigation img");

navToggle.addEventListener("click", () => {
    const visible = primaryNav.getAttribute('visible');

    console.log(visible);

    var isTrue = (visible === 'true');
    
    primaryNav.setAttribute('visible', !isTrue);
})