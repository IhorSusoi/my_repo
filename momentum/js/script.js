document.addEventListener("DOMContentLoaded", function(){
    let xtime=document.getElementById("time");
    let xdate=document.getElementById("date");
    
    function showTime(){
        let time=new Date;
        xdate.textContent=time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        xtime.textContent=time.toLocaleTimeString('en-US', { hour12: false });
        setTimeout(showTime, 1000);
        setTimeout(showGreetings, 1000);
    }

    showTime();

    function showGreetings(){
        let greeting=document.getElementById("greeting");
        let partOfDay = getPartOfDay();
        greeting.textContent=`Good ${partOfDay}, `;
    }

    function getPartOfDay(){
        let time = new Date();
        let hours = time.getHours();
        switch(Math.floor(hours/6)){
            case 0:
                return 'night';
                break;
            case 1:
                return 'morning';
                break;
            case 2:
                return 'afternoon';
                break;
            case 3:
                return 'evening';
                break;
        }
    }

    showGreetings();

    let nameInput = document.getElementById("savedName");
    nameInput.addEventListener("input", function() {
    let name = nameInput.value;
    localStorage.setItem("name", name);
    document.getElementById("savedName").innerHTML = name;
    });
    let savedName = localStorage.getItem("name");
    if (savedName) {
    nameInput.value = savedName;
    document.getElementById("savedName").textContent = savedName;
    }

    function getRandomNum(){
        min = 1;
        max = 20;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomNum = getRandomNum();

    function setBg(){
        let timeOfDay = getPartOfDay();
        let bgNum = randomNum + '';
        bgNum = bgNum.padStart(2, '0');
        let body = document.querySelector('body');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.addEventListener('load', () => {     
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
        });
    }
    setBg();
    
    function getSlidePrev(){
        if(randomNum==1){
            randomNum=20;
        } else randomNum--;
        setBg();
        return;
    }

    function getSlideNext(){
        if(randomNum==20){
            randomNum=1;
        } else randomNum++;
        setBg();
        return;
    }

    let slidePrev = document.getElementById('slidePrev');
    let slideNext = document.getElementById('slideNext');

    slidePrev.addEventListener('click', getSlidePrev);
    slideNext.addEventListener('click', getSlideNext);

    let city = 'Kalush';

    async function getWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=553daacacff92b4b81ef6bef38bb8c54&units=metric`;
        const res = await fetch(url);
        const data = await res.json(); 
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;    
    }

    let cityInput = document.getElementById("savedCity");
    cityInput.addEventListener("input", function() {
    city = cityInput.value;
    localStorage.setItem("city", city);
    document.getElementById("savedCity").innerHTML = city;
    });
    let savedCity = localStorage.getItem("city");
    if (savedCity) {
    cityInput.value = savedCity;
    document.getElementById("savedCity").textContent = savedCity;
    }

    cityInput.addEventListener('change', getWeather);

    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');

    getWeather();
});