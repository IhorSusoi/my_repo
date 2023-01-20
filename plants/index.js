let text = 
"1.Verstka vidpovidae maket width768px +24\n"+
"2.~380px +24\n"+
"3.nema prokrutky width<320px +15\n"+
"4.adaptive menu +22\n\n"+
"MARK: 75";
console.log(text);

let navbarIsOpen = false;
let clickOnBurger = false;

function clickOnBurgerFoo(){
    clickOnBurger = true;
}

function navbarOpen() {
    let burger = document.getElementById("burgerMenu");
    if (burger.style.transform === "rotate(-90deg)") {
        burger.style.transform = "rotate(0)";
    } else burger.style.transform = "rotate(-90deg)";

    let navMenu = document.getElementById("nav-menu");
    if (navMenu.style.left === "0px") {
        navMenu.style.left = "-100%";
    } else navMenu.style.left = "0";
}

function navbarClose() {
    let burger = document.getElementById("burgerMenu");
    if (burger.style.transform === "rotate(0)") {
        burger.style.transform = "rotate(-90deg)";
    } else burger.style.transform = "rotate(0)";

    let navMenu = document.getElementById("nav-menu");
    if (navMenu.style.left === "-100%") {
        navMenu.style.left = "-100%";
    } else navMenu.style.left = "-100%";
}

function navbar() {
    if(clickOnBurger){
        navbarOpen();
    } else{
        navbarClose(); 
    }
    clickOnBurger = false;
}
