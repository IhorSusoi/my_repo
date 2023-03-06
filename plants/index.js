let text = '1: +50\n2: +50\n3: +25\nFinal mark: 100';
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

let blurGardens = document.getElementsByClassName("service_item gardenCare");
let blurLawn = document.getElementsByClassName("service_item lawnCare");
let blurPlanting = document.getElementsByClassName("service_item planting");

let blurGardensBtn = document.getElementsByClassName("btn gardens");
let blurLawnBtn = document.getElementsByClassName("btn lawn");
let blurPlantingBtn = document.getElementsByClassName("btn planting");

let blurGardensOn = 0;
let blurLawnOn = 0;
let blurPlantingOn = 0;

function itemsBlurGardens(){
    if(blurLawnOn + blurPlantingOn == 2) return 0;
    if(blurGardensOn==0){
    blurGardensBtn[0].style.color = '#EDF2EC';
    blurGardensBtn[0].style['background-color'] = '#E06733';
    blurGardensOn = 1;
    for(let i=0; i<blurGardens.length; i++) {
        blurGardens[i].style.filter = "blur(0px)";
        for(let j=0; j<blurLawn.length; j++){
            if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(5px)";
        }
        for(let y=0; y<blurPlanting.length; y++){
            if(blurPlantingOn == 0) blurPlanting[y].style.filter = "blur(5px)";
        }
    }
    }   else {
            blurGardensBtn[0].style.color = '#E06733';
            blurGardensBtn[0].style['background-color'] = '#EDF2EC';
            blurGardensOn = 0;
            for(let i=0; i<blurGardens.length; i++) {
                blurGardens[i].style.filter = "blur(5px)";
                for(let j=0; j<blurLawn.length; j++){
                    if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(5px)";
                }
                for(let y=0; y<blurPlanting.length; y++){
                    if(blurPlantingOn == 0) blurPlanting[y].style.filter = "blur(5px)";
                }
            }
    }
    if(blurLawnOn + blurGardensOn + blurPlantingOn == 0) {
        for(let i=0; i<blurPlanting.length; i++) {
            blurPlanting[i].style.filter = "blur(0px)";
            for(let j=0; j<blurLawn.length; j++){
                if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(0px)";
            }
            for(let y=0; y<blurGardens.length; y++){
                if(blurGardensOn == 0) blurGardens[y].style.filter = "blur(0px)";
            }
        }
    }
}

function itemsBlurLawn(){
    if(blurGardensOn + blurPlantingOn == 2) return 0;
    if(blurLawnOn==0){
        blurLawnBtn[0].style.color = '#EDF2EC';
        blurLawnBtn[0].style['background-color'] = '#E06733';
        blurLawnOn = 1;
        for(let i=0; i<blurLawn.length; i++) {
            blurLawn[i].style.filter = "blur(0px)";
            for(let j=0; j<blurGardens.length; j++) {
                if(blurGardensOn == 0) blurGardens[j].style.filter = "blur(5px)";
            }
            for(let y=0; y<blurPlanting.length; y++){
                if(blurPlantingOn == 0) blurPlanting[y].style.filter = "blur(5px)";
            }    
        }  
    }   else {
            blurLawnBtn[0].style.color = '#E06733';
            blurLawnBtn[0].style['background-color'] = '#EDF2EC';
            blurLawnOn = 0;
            for(let i=0; i<blurLawn.length; i++) {
                blurLawn[i].style.filter = "blur(5px)";
                for(let j=0; j<blurGardens.length; j++) {
                    if(blurGardensOn == 0) blurGardens[j].style.filter = "blur(5px)";
                }
                for(let y=0; y<blurPlanting.length; y++){
                    if(blurPlantingOn == 0) blurPlanting[y].style.filter = "blur(5px)";
                }    
            }
    }
    if(blurLawnOn + blurGardensOn + blurPlantingOn == 0) {
        for(let i=0; i<blurPlanting.length; i++) {
            blurPlanting[i].style.filter = "blur(0px)";
            for(let j=0; j<blurLawn.length; j++){
                if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(0px)";
            }
            for(let y=0; y<blurGardens.length; y++){
                if(blurGardensOn == 0) blurGardens[y].style.filter = "blur(0px)";
            }
        }
    }
}

function itemsBlurPlanting(){
    if(blurLawnOn + blurGardensOn == 2) return 0;
    if(blurPlantingOn==0){
        blurPlantingBtn[0].style.color = '#EDF2EC';
        blurPlantingBtn[0].style['background-color'] = '#E06733';
        blurPlantingOn = 1;
        for(let i=0; i<blurPlanting.length; i++) {
            blurPlanting[i].style.filter = "blur(0px)";
            for(let j=0; j<blurLawn.length; j++){
                if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(5px)";
            }
            for(let y=0; y<blurGardens.length; y++){
                if(blurGardensOn == 0) blurGardens[y].style.filter = "blur(5px)";
            }
        }
    }   else {
        blurPlantingBtn[0].style.color = '#E06733';
        blurPlantingBtn[0].style['background-color'] = '#EDF2EC';
        blurPlantingOn = 0;
        for(let i=0; i<blurPlanting.length; i++) {
            blurPlanting[i].style.filter = "blur(5px)";
            for(let j=0; j<blurLawn.length; j++){
                if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(5px)";
            }
            for(let y=0; y<blurGardens.length; y++){
                if(blurGardensOn == 0) blurGardens[y].style.filter = "blur(5px)";
            }
        }
    }
    if(blurLawnOn + blurGardensOn + blurPlantingOn == 0) {
        for(let i=0; i<blurPlanting.length; i++) {
            blurPlanting[i].style.filter = "blur(0px)";
            for(let j=0; j<blurLawn.length; j++){
                if(blurLawnOn == 0) blurLawn[j].style.filter = "blur(0px)";
            }
            for(let y=0; y<blurGardens.length; y++){
                if(blurGardensOn == 0) blurGardens[y].style.filter = "blur(0px)";
            }
        }
    }
}

let openBasicsIs = 0;
let openStandardIs = 0;
let openProcareIs = 0;

function openProcare(){
    let openProcareElem = document.getElementById("procare");
    let openProcareOpen = document.getElementById("procareOpen");
    let openPricesItems = document.getElementById("pricesItemsOpen");
    let accordionArrowProcare = document.getElementById("accordionArrowProcare");
    if(openProcareIs==0){
        openProcareElem.style['background-color'] = "#D6E7D2";
        if (x.matches){
            openProcareElem.style.height = "180px";
        } else openProcareElem.style.height = "154px";
        setTimeout(function(){ openProcareOpen.style.display = "flex";},400);
        if (x.matches){
            openPricesItems.style.height = "370px";
        } else openPricesItems.style.height = "386px";        
        accordionArrowProcare.style.transform = "rotate(180deg)";
        openProcareIs = 1;
    } else if(openProcareIs==1){
        openProcareElem.style['background-color'] = "#EDF2EC";
        openProcareElem.style.height = "50px";
        openProcareOpen.style.display = "none";
        if (x.matches){
            openPricesItems.style.height = "235px";
        } else openPricesItems.style.height = "282px";
        accordionArrowProcare.style.transform = "rotate(0deg)";
        openProcareIs = 0;
    }
    let openBasicsElem = document.getElementById("basics");
    let openBasicsOpen = document.getElementById("basicsOpen");
    let accordionArrowBasics = document.getElementById("accordionArrowBasics");
    let openStandardElem = document.getElementById("standard");
    let openStandardOpen = document.getElementById("standardOpen");
    let accordionArrowStandard = document.getElementById("accordionArrowStandard");
    openBasicsElem.style['background-color'] = "#EDF2EC";
    openBasicsElem.style.height = "50px";
    openBasicsOpen.style.display = "none";
    accordionArrowBasics.style.transform = "rotate(0deg)";
    openBasicsIs = 0;
    openStandardElem.style['background-color'] = "#EDF2EC";
    openStandardElem.style.height = "50px";
    openStandardOpen.style.display = "none";
    accordionArrowStandard.style.transform = "rotate(0deg)";
    openStandardIs = 0;

}

function openBasics(){
    let openBasicsElem = document.getElementById("basics");
    let openBasicsOpen = document.getElementById("basicsOpen");
    let openPricesItems = document.getElementById("pricesItemsOpen");
    let accordionArrowBasics = document.getElementById("accordionArrowBasics");
    if(openBasicsIs==0){
        openBasicsElem.style['background-color'] = "#D6E7D2";
        if (x.matches){
            openBasicsElem.style.height = "180px";
        } else openBasicsElem.style.height = "154px";
        setTimeout(function(){ openBasicsOpen.style.display = "flex";},400);
        if (x.matches){
            openPricesItems.style.height = "370px";
        } else openPricesItems.style.height = "386px";        
        accordionArrowBasics.style.transform = "rotate(180deg)";
        openBasicsIs = 1;

    } else if(openBasicsIs==1){
        openBasicsElem.style['background-color'] = "#EDF2EC";
        openBasicsElem.style.height = "50px";
        openBasicsOpen.style.display = "none";
        if (x.matches){
            openPricesItems.style.height = "235px";
        } else openPricesItems.style.height = "282px";        
        accordionArrowBasics.style.transform = "rotate(0deg)";
        openBasicsIs = 0;
    }
    let openProcareElem = document.getElementById("procare");
    let openProcareOpen = document.getElementById("procareOpen");    
    let accordionArrowProcare = document.getElementById("accordionArrowProcare");
    let openStandardElem = document.getElementById("standard");
    let openStandardOpen = document.getElementById("standardOpen");
    let accordionArrowStandard = document.getElementById("accordionArrowStandard");
    openStandardElem.style['background-color'] = "#EDF2EC";
    openStandardElem.style.height = "50px";
    openStandardOpen.style.display = "none";
    accordionArrowStandard.style.transform = "rotate(0deg)";
    openStandardIs = 0;
    openProcareElem.style['background-color'] = "#EDF2EC";
    openProcareElem.style.height = "50px";
    openProcareOpen.style.display = "none";
    accordionArrowProcare.style.transform = "rotate(0deg)";
    openProcareIs = 0;
}

function openStandard(){
    let openStandardElem = document.getElementById("standard");
    let openStandardOpen = document.getElementById("standardOpen");
    let openPricesItems = document.getElementById("pricesItemsOpen");
    let accordionArrowStandard = document.getElementById("accordionArrowStandard");
    if(openStandardIs==0){
        openStandardElem.style['background-color'] = "#D6E7D2";
        if (x.matches){
            openStandardElem.style.height = "180px";
        } else openStandardElem.style.height = "154px";
        setTimeout(function(){ openStandardOpen.style.display = "flex";},400);
        if (x.matches){
            openPricesItems.style.height = "370px";
        } else openPricesItems.style.height = "386px";
        accordionArrowStandard.style.transform = "rotate(180deg)";
        openStandardIs = 1;
    } else if(openStandardIs==1){
        openStandardElem.style['background-color'] = "#EDF2EC";
        openStandardElem.style.height = "50px";
        openStandardOpen.style.display = "none";
        if (x.matches){
            openPricesItems.style.height = "235px";
        } else openPricesItems.style.height = "282px";
        accordionArrowStandard.style.transform = "rotate(0deg)";
        openStandardIs = 0;
    }
    let openProcareElem = document.getElementById("procare");
    let openProcareOpen = document.getElementById("procareOpen");
    let accordionArrowProcare = document.getElementById("accordionArrowProcare");
    let openBasicsElem = document.getElementById("basics");
    let openBasicsOpen = document.getElementById("basicsOpen");
    let accordionArrowBasics = document.getElementById("accordionArrowBasics");
    openBasicsElem.style['background-color'] = "#EDF2EC";
    openBasicsElem.style.height = "50px";
    openBasicsOpen.style.display = "none";
    accordionArrowBasics.style.transform = "rotate(0deg)";
    openBasicsIs = 0;
    openProcareElem.style['background-color'] = "#EDF2EC";
    openProcareElem.style.height = "50px";
    openProcareOpen.style.display = "none";
    accordionArrowProcare.style.transform = "rotate(0deg)";
    openProcareIs = 0;
}

var x = window.matchMedia("(max-width: 767px)");
var y1 = window.matchMedia("(max-width: 1439px)");
var y2 = window.matchMedia("(min-width: 768px)");

let cityIsOpen=0;

function cityActive(){
    let NewYork = document.querySelector('#NewYork');
    let Canandaigua = document.querySelector('#Canandaigua');
    let Yonkers = document.querySelector('#Yonkers');
    let Sherill = document.querySelector('#Sherill');
    let choosingCity = document.querySelector('#choosingCities')
    let active = document.querySelector('#cityChoose');
    let accordionActive = document.querySelector('#accordeon_btnIMG_active');
    let accordionUnctive = document.querySelector('#accordeon_btnIMG_unactive');
    active.classList.toggle('active');
    accordionActive.classList.toggle('active');
    accordionUnctive.classList.toggle('active');
    choosingCity.classList.toggle('active');
    if(cityIsOpen==0){
    setTimeout(function(){NewYork.classList.toggle('active')},200);
    setTimeout(function(){Canandaigua.classList.toggle('active')},200);
    setTimeout(function(){Yonkers.classList.toggle('active')},200);
    setTimeout(function(){Sherill.classList.toggle('active')},200);
    cityIsOpen=1;
    } else {
        NewYork.classList.toggle('active');
        Canandaigua.classList.toggle('active');
        Yonkers.classList.toggle('active');
        Sherill.classList.toggle('active');
        cityIsOpen=0;
    }
}

let CanandaiguaCityCardOpen = 0;
let NewYorkCityCardOpen = 0;
let YonkersCityCardOpen = 0;
let SherillCityCardOpen = 0;

function cityChangeCanandaigua(){
    let active = document.querySelector('#city');
    let active1 = document.querySelector('#cityChoose');
    let activeCityCard = document.querySelector('#CanandaiguaCityCard');
    let activeCityCardNY = document.querySelector('#NewYorkCityCard');
    let activeCityCardYO = document.querySelector('#YonkersCityCard');
    let activeCityCardSH = document.querySelector('#SherillCityCard');
    let womenImg = document.querySelector('#womanImg');
    active.textContent = "Canandaigua, NY";
    active1.style['background-color'] = '#C1E698';
    activeCityCard.classList.toggle('active');
    if(CanandaiguaCityCardOpen==0){
        CanandaiguaCityCardOpen = 1;
    } else CanandaiguaCityCardOpen = 0;
    if(NewYorkCityCardOpen){
        activeCityCardNY.classList.toggle('active');
        NewYorkCityCardOpen=0;
    }
    if(YonkersCityCardOpen){
        activeCityCardYO.classList.toggle('active');
        YonkersCityCardOpen=0;
    }
    if(SherillCityCardOpen){
        activeCityCardSH.classList.toggle('active');
        SherillCityCardOpen=0;
    }
    if (y1.matches&&y2.matches){
        womenImg.style['margin-top'] = '14px';
        active1.style.margin = '75px 0 0 0';
    }
    if((SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        if(y1.matches&&y2.matches)womenImg.style['margin-top'] = '250px';
        active1.style.margin = '100px 0 0 0'
    }
    if (x.matches){
        womenImg.style.display = 'none';
    }
    if(x.matches&&(SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        womenImg.style.display = 'block';
        womenImg.style.margin = '132px 0 0 0';
    }
}

function cityChangeNewYork(){
    let active = document.querySelector('#city');
    let active1 = document.querySelector('#cityChoose');
    let activeCityCard = document.querySelector('#NewYorkCityCard');
    let activeCityCardCD = document.querySelector('#CanandaiguaCityCard');
    let activeCityCardYO = document.querySelector('#YonkersCityCard');
    let activeCityCardSH = document.querySelector('#SherillCityCard');
    let womenImg = document.querySelector('#womanImg');
    active.textContent = "New York City";
    active1.style['background-color'] = '#C1E698';
    activeCityCard.classList.toggle('active');
    if(NewYorkCityCardOpen==0){
        NewYorkCityCardOpen = 1;
    } else NewYorkCityCardOpen = 0;
    if(CanandaiguaCityCardOpen){
        activeCityCardCD.classList.toggle('active');
        CanandaiguaCityCardOpen=0;
    }
    if(YonkersCityCardOpen){
        activeCityCardYO.classList.toggle('active');
        YonkersCityCardOpen=0;
    }
    if(SherillCityCardOpen){
        activeCityCardSH.classList.toggle('active');
        SherillCityCardOpen=0;
    }
    if (y1.matches&&y2.matches){
        womenImg.style['margin-top'] = '14px';
        active1.style.margin = '75px 0 0 0';
    }
    if((SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        if(y1.matches&&y2.matches)womenImg.style['margin-top'] = '250px';
        active1.style.margin = '100px 0 0 0'
    }
    if (x.matches){
        womenImg.style.display = 'none';
    }
    if(x.matches&&(SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        womenImg.style.display = 'block';
        womenImg.style.margin = '132px 0 0 0';
    }
}

function cityChangeYonkers(){
    let active = document.querySelector('#city');
    let active1 = document.querySelector('#cityChoose');
    let activeCityCard = document.querySelector('#YonkersCityCard');
    let activeCityCardNY = document.querySelector('#NewYorkCityCard');
    let activeCityCardCD = document.querySelector('#CanandaiguaCityCard');
    let activeCityCardSH = document.querySelector('#SherillCityCard');
    let womenImg = document.querySelector('#womanImg');
    active.textContent = "Yonkers, NY";
    active1.style['background-color'] = '#C1E698';
    activeCityCard.classList.toggle('active');
    if(YonkersCityCardOpen==0){
        YonkersCityCardOpen = 1;
    } else YonkersCityCardOpen = 0;
    if(NewYorkCityCardOpen){
        activeCityCardNY.classList.toggle('active');
        NewYorkCityCardOpen=0;
    }
    if(CanandaiguaCityCardOpen){
        activeCityCardCD.classList.toggle('active');
        CanandaiguaCityCardOpen=0;
    }
    if(SherillCityCardOpen){
        activeCityCardSH.classList.toggle('active');
        SherillCityCardOpen=0;
    }
    if (y1.matches&&y2.matches){
        womenImg.style['margin-top'] = '14px';
        active1.style.margin = '75px 0 0 0';
    }
    if((SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        if(y1.matches&&y2.matches)womenImg.style['margin-top'] = '250px';
        active1.style.margin = '100px 0 0 0'
    }
    if (x.matches){
        womenImg.style.display = 'none';
    }
    if(x.matches&&(SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        womenImg.style.display = 'block';
        womenImg.style.margin = '132px 0 0 0';
    }
}

function cityChangeSherill(){
    let active = document.querySelector('#city');
    let active1 = document.querySelector('#cityChoose');
    let activeCityCard = document.querySelector('#SherillCityCard');
    let activeCityCardNY = document.querySelector('#NewYorkCityCard');
    let activeCityCardCD = document.querySelector('#CanandaiguaCityCard');
    let activeCityCardYO = document.querySelector('#YonkersCityCard');
    let womenImg = document.querySelector('#womanImg');
    active.textContent = "Sherrill, NY";
    active1.style['background-color'] = '#C1E698';
    activeCityCard.classList.toggle('active');
    if(SherillCityCardOpen==0){
        SherillCityCardOpen = 1;
    } else SherillCityCardOpen = 0;
    if(NewYorkCityCardOpen){
        activeCityCardNY.classList.toggle('active');
        NewYorkCityCardOpen=0;
    }
    if(CanandaiguaCityCardOpen){
        activeCityCardCD.classList.toggle('active');
        CanandaiguaCityCardOpen=0;
    }
    if(YonkersCityCardOpen){
        activeCityCardYO.classList.toggle('active');
        YonkersCityCardOpen=0;
    }
    if (y1.matches&&y2.matches){
        womenImg.style['margin-top'] = '14px';
        active1.style.margin = '75px 0 0 0';
    }
    if((SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        if(y1.matches&&y2.matches)womenImg.style['margin-top'] = '250px';
        active1.style.margin = '100px 0 0 0'
    }
    if (x.matches){
        womenImg.style.display = 'none';
    }
    if(x.matches&&(SherillCityCardOpen+YonkersCityCardOpen+NewYorkCityCardOpen+CanandaiguaCityCardOpen)==0){
        active.textContent = "City";
        womenImg.style.display = 'block';
        womenImg.style.margin = '132px 0 0 0';
    }
}

