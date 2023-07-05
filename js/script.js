
//Main Naviagtion

const nav = document.getElementById('main-nav');
let open_nav = document.querySelector('.open');
let exit_nav = document.querySelector('.exit');

open_nav.addEventListener('click', () =>{
    nav.style.transform = 'translate(0)';
});

exit_nav.addEventListener('click', () => {
    nav.style.transform = 'translate(-100%)';
});


//Right Sidebar Navigation

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

//Toggle sections

function showPage(page) {
    document.querySelectorAll('.data').forEach(data => {
        data.style.display = 'none';
    });

    document.querySelector(`#${page}`).style.display = 'block';
}

function showHead(head) {
    document.querySelectorAll('.pry-cont').forEach(header => {
        header.style.display = 'none';
    });

    document.querySelector(`#${head}`).style.display = 'block';
}

function background() {
    document.querySelectorAll('.gator').forEach(gate => {
        gate.classList.remove('current');
    });
}

document.querySelectorAll('.gator').forEach(gator => {
    gator.onclick = function () {
        showPage(this.dataset.page);
        showHead(this.dataset.head);
        background();
        gator.classList.add('current');
        const mq = window.matchMedia('(max-width: 1199px)');
        if (mq.matches) {
            nav.style.transform = 'translate(-100%)';
        }   
    };
});

//Side Nav Type
function focusBtn() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('focus');
    });
}

document.querySelectorAll('.btn').forEach(button => {
    button.onclick = function () {
        focusBtn();
        button.classList.add('focus');   
    };
});


//Nav Bar Width Adjust

const side = document.querySelector('.side');
side.addEventListener('click', () => {
    document.querySelectorAll('.joy').forEach(joey => {
        if (!joey.style.opacity || joey.style.opacity == 1) {
            joey.style.opacity = 0;
            joey.style.display = 'none';
            nav.firstElementChild.style.width = '19%';
            nav.firstElementChild.style.paddingRight = '0.5rem';
            body.style.width = 'calc(100% - 98px)';
            body.style.left = '98px'
        } else {
            setTimeout(() => {
                joey.style.opacity = 1;
                joey.style.display = 'inline'
                document.querySelector('.acc').style.display = 'block';
            }, 500);
            nav.firstElementChild.style.width = '60%';
            nav.firstElementChild.style.paddingRight = '0';
            body.style.width = 'calc(100% - 270px)';
            body.style.left = '270px'
        }
    });
    side.classList.toggle('span-menu');
});


//Notifcation Section

document.querySelectorAll('.exit-note').forEach(exit =>{
    exit.addEventListener('click', (e) => {
        e.target.parentElement.style.animationPlayState = 'running';
        e.target.parentElement.addEventListener('animationend', () => {
        e.target.parentElement.style.display = 'none';
        });
    });
});

document.querySelectorAll('.ten').forEach(ten =>{
    ten.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.style.display = 'none';
    });
});

document.querySelector('.success').addEventListener('click', () => {
    document.querySelector('.success-note').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.success-note').style.display = 'none';
    }, 5000);
});
document.querySelector('.info').addEventListener('click', () => {
    document.querySelector('.info-note').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.info-note').style.display = 'none';
    }, 5000);
});
document.querySelector('.warning').addEventListener('click', () => {
    document.querySelector('.warning-note').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.warning-note').style.display = 'none';
    }, 5000);
});
document.querySelector('.danger').addEventListener('click', () => {
    document.querySelector('.danger-note').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.danger-note').style.display = 'none';
    }, 5000);
});