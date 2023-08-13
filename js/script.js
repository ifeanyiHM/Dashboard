"strict mode";

document.addEventListener("DOMContentLoaded", function () {
  //Main Naviagtion
  const nav = document.getElementById("main-nav");
  const open_nav = document.querySelector(".open");
  const exit_nav = document.querySelector(".exit");

  const navTransform = (translate, hidden) => {
    nav.style.transform = translate;
    document.body.style.overflow = hidden;
  };

  open_nav.addEventListener("click", () => {
    navTransform("translate(0)", "hidden");
  });

  exit_nav.addEventListener("click", () => {
    navTransform("translate(-100%)", "visible");
  });

  //Right Sidebar Navigation

  const side_nav = document.getElementById("right-sidebar");
  const open_config = document.querySelector(".open-config");
  const close_config = document.querySelector(".close-config");
  const material = document.getElementById("material-section");

  const rightNavTransform = (translate, hidden) => {
    side_nav.style.transform = translate;
    document.body.style.overflow = hidden;
  };

  open_config.addEventListener("click", () => {
    rightNavTransform("translate(0)", "hidden");
  });

  material.addEventListener("click", () => {
    rightNavTransform("translate(0)", "hidden");
  });

  close_config.addEventListener("click", () => {
    rightNavTransform("translate(100%)", "visible");
  });

  //Sidebar background color

  const btn1 = document.querySelector(".btn1");
  btn1.addEventListener("click", () => {
    nav.classList.remove("main-nav2");
    nav.classList.remove("main-nav3");
  });
  const btn2 = document.querySelector(".btn2");
  btn2.addEventListener("click", () => {
    nav.classList.add("main-nav2");
    nav.classList.remove("main-nav3");
  });
  const btn3 = document.querySelector(".btn3");
  btn3.addEventListener("click", () => {
    nav.classList.add("main-nav3");
    nav.classList.remove("main-nav2");
  });

  //Dark Mode Function
  const toggleMode = document.querySelector(".togglemode");
  const body = document.body;

  toggleMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  //Fixed header
  const header = document.getElementById("main-header");
  const fixMode = document.querySelector(".fix-mode");

  fixMode.addEventListener("click", () => {
    if (fixMode.className == "fix-mode") {
      fixMode.classList.add("modefix");
      body.classList.add("fixed");
    } else {
      fixMode.classList.remove("modefix");
      body.classList.remove("fixed");
    }
  });

  //Action Navbar
  const action = document.querySelector(".action");
  action.addEventListener("click", function (e) {
    const actionBtn = e.target.closest(".action-btn");
    if (!actionBtn) return;
    action.lastElementChild.style.opacity =
      action.lastElementChild.style.opacity == 0 ? 1 : 0;
  });

  //Toggle sections
  const bottomList = document.querySelector(".bottom-list");
  const sideColor = document.querySelectorAll(".side");

  function showPage(page) {
    document.querySelectorAll(".data").forEach((data) => {
      data.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
  }

  function showHead(head) {
    document.querySelectorAll(".pry-cont").forEach((header) => {
      header.style.display = "none";
    });

    document.querySelector(`#${head}`).style.display = "block";
  }

  function background() {
    document.querySelectorAll(".gator").forEach((gate) => {
      gate.classList.remove("current");
    });
  }

  const navList = document.querySelectorAll(".gator");
  navList.forEach((gator) => {
    gator.onclick = function () {
      showPage(this.dataset.page);
      showHead(this.dataset.head);
      background();
      gator.classList.add("current");

      //Media query. Escape navbar on mobile/tablets
      const mq = window.matchMedia("(max-width: 1199px)");
      mq.matches && navTransform("translate(-100%)", "visible");
    };
  });

  //Navbar link colors located at the right side bar
  sideColor.forEach((sidebtn) => {
    sidebtn.addEventListener("click", () => {
      const clickedColor = sidebtn.dataset.color;

      bottomList.firstElementChild.style.borderColor = clickedColor;
      bottomList.firstElementChild.style.color = clickedColor;
      bottomList.lastElementChild.style.background = clickedColor;
    });
  });

  //Side Nav Type
  function focusBtn() {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("focus");
    });
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.onclick = function () {
      focusBtn();
      button.classList.add("focus");
    };
  });

  //Nav Bar Width Adjust
  function navAnim(width, padding, bodyWidth, leftProps) {
    nav.firstElementChild.style.width = width;
    nav.firstElementChild.style.paddingRight = padding;
    body.style.width = bodyWidth;
    body.style.left = leftProps;
  }

  //TOGGLE NAVBAR WIDTH SIZE
  const side = document.querySelector(".side");
  side.addEventListener("click", () => {
    document.querySelectorAll(".joy").forEach((joey) => {
      if (!joey.style.opacity || joey.style.opacity == 1) {
        joey.style.opacity = 0;
        joey.style.display = "none";

        navAnim("19%", "0.5rem", "calc(100% - 98px)", "98px");
      } else {
        setTimeout(() => {
          joey.style.opacity = 1;
          joey.style.display = "inline";
          document.querySelector(".acc").style.display = "block";
        }, 500);

        navAnim("60%", "0", "calc(100% - 270px)", "270px");
      }
    });
    side.classList.toggle("span-menu");
  });

  //Notifcation Section

  document.querySelectorAll(".exit-note").forEach((exit) => {
    exit.addEventListener("click", (e) => {
      e.target.parentElement.style.animationPlayState = "running";
      e.target.parentElement.addEventListener("animationend", () => {
        e.target.parentElement.style.display = "none";
      });
    });
  });

  // METHOD 1
  const containerBtn = document.querySelector(".container-btn");
  containerBtn.addEventListener("click", function (e) {
    const clicked = e.target.closest(".ten");
    if (!clicked) return;
    const parentEle = e.target.closest(".notal");
    parentEle.style.display = "none";
  });

  // //METHOD 2
  // document.querySelectorAll(".ten").forEach((ten) => {
  //   ten.addEventListener("click", (e) => {
  //     e.target.parentElement.parentElement.parentElement.style.display = "none";
  //   });
  // });

  //METHOD: data attribute, event.target
  const noteSeting = document.querySelector(".btn");
  noteSeting.addEventListener("click", function (e) {
    const clicked = e.target.closest(".btn--color");
    document.querySelector(`.notal-${clicked.dataset.btn}`).style.display =
      "block";
    setTimeout(() => {
      document.querySelector(`.notal-${clicked.dataset.btn}`).style.display =
        "none";
    }, 5000);
  });

  // //METHOD 2 querySelector
  // const noteSeting = (item) => {
  //   document.querySelector(item).style.display = "block";
  //   setTimeout(() => {
  //     document.querySelector(item).style.display = "none";
  //   }, 5000);
  // };

  // document.querySelector(".success").addEventListener("click", () => {
  //   noteSeting(".success-note");
  // });
  // document.querySelector(".info").addEventListener("click", () => {
  //   noteSeting(".info-note");
  // });
  // document.querySelector(".warning").addEventListener("click", () => {
  //   noteSeting(".warning-note");
  // });
  // document.querySelector(".danger").addEventListener("click", () => {
  //   noteSeting(".danger-note");
  // });
});
