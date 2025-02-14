const header = document.querySelector('header');

function scrollOnHeader(){
    header.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', scrollOnHeader)

function active(){
    const menu = document.getElementById("menu-h")
    const element = document.querySelector(".header-links")

    if(menu .checked){
        element.style.transform = 'translateX(0%)';
    } else{
        element.style.transform = 'translateX(100%)';
    }
}