const mobile = document.querySelector('.mobile');
const container = document.querySelector('.container');
const gotoNavigation = document.querySelector('.hamburger');
const gotoMainPage = document.querySelector('.fa-times');



gotoNavigation.addEventListener('click', () => {
    mobile.style.display = "flex";
    container.style.display = "none";
})

gotoMainPage.addEventListener('click', () => {
    mobile.style.display = "none";
    container.style.display = "block";
})