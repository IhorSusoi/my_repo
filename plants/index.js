console.log('1. 10\n2. 9\n3. 48\n4. 12\n5. 20\nSumm = 99')

function navbar() {
    let burger = document.getElementById("burgerMenu");
    if (burger.style.transform === "rotate(-90deg) scale(0.8)") {
        burger.style.transform = "rotate(0) scale(1.0)";
    } else {
        burger.style.transform = "rotate(-90deg) scale(0.8)";
    }
    
    if (burger.style.position === "fixed") {
        burger.style.position = "relative";
    } else {
        burger.style.position = "fixed";
    }

    let navMenu = document.getElementById("nav-menu");
    if (navMenu.style.left === "0px") {
        navMenu.style.left = "-100%";
    } else {
        navMenu.style.left = "0px";
    }

  }
