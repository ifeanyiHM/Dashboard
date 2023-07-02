const nav = document.getElementById('main-nav');
let open_nav = document.querySelector('.open');
let exit_nav = document.querySelector('.exit');

open_nav.addEventListener('click', () =>{
    nav.style.transform = 'translate(0)';
});

exit_nav.addEventListener('click', () => {
    nav.style.transform = 'translate(-100%)';
});

let side_nav = document.getElementById('right-sidebar');
let open_config = document.querySelector('.open-config');
let close_config = document.querySelector('.close-config');
let material = document.getElementById('material-section');

open_config.addEventListener('click', () => {
    side_nav.style.transform = 'translate(0)';
});

material.addEventListener('click', () => {
    side_nav.style.transform = 'translate(0)';
})

close_config.addEventListener('click', () => {
    side_nav.style.transform = 'translate(100%)';
});

//Sidebar background color

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    nav.classList.remove('main-nav2');
    nav.classList.remove('main-nav3');
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    nav.classList.add('main-nav2');
    nav.classList.remove('main-nav3');
});
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    nav.classList.add('main-nav3');
    nav.classList.remove('main-nav2');
});

//Dark Mode Function
const toggleMode = document.querySelector('.togglemode');
const body = document.body;

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

//Side Bar Colors
const current = document.querySelector('.current');
const bottomList = document.querySelector('.bottom-list');
const sideColor = document.querySelectorAll('.side');
sideColor.forEach((sidebtn) => {
    sidebtn.addEventListener('click', () => {
        current.style.background = sidebtn.dataset.color;
        bottomList.firstElementChild.style.borderColor = sidebtn.dataset.color;
        bottomList.firstElementChild.style.color = sidebtn.dataset.color;
        bottomList.lastElementChild.style.background = sidebtn.dataset.color;
    });
});

//Action Navbar
const actionBtn = document.querySelector('.action-btn');
if (actionBtn) {
    actionBtn.addEventListener('click', () => {
        const action = document.querySelector('.action');
        if (action.lastElementChild.style.opacity == 0) {
            action.lastElementChild.style.opacity = 1;
        } else {
            action.lastElementChild.style.opacity = 0;
        }
    });
};