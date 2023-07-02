const header = document.getElementById('main-header');
const menu = document.querySelector('.menu');
const closeMemu = document.querySelector('.ment');

menu.addEventListener('click', () => {
    
    if (header.style.height == '3.5rem') {
        header.style.height = '13.6rem';
        menu.classList.add('ment');
    } else {
        header.style.height = '3.5rem';
        menu.classList.remove('ment');
    }
});

//Remember Me

const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('lightmod');
});