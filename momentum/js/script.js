import playList from "../js/playList.js";

console.log("My mark: 111/150");

document.addEventListener("DOMContentLoaded", function () {
  let xtime = document.getElementById("time");
  let xdate = document.getElementById("date");

  let englishLang = document.getElementById("ENLang");
  let ukraineLang = document.getElementById("UALang");
  let isEng = true;
  let language = localStorage.getItem("lang");
  if (!language) {
    language = "en";
  }
  let languageTime = localStorage.getItem("langTime");
  if (!languageTime) {
    languageTime = "en-US";
  }

  let cityInput = document.getElementById("savedCity");
  let nameInput = document.getElementById("savedName");

  if (language == "ua") {
    ukraineLang.classList.toggle("activeLang");
    ukraineLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("activeLang");
    cityInput.placeholder = 'Калуш';
    nameInput.placeholder = "[Введіть ім'я]";
  }

  function showTime() {
    let time = new Date();
    xdate.textContent = time.toLocaleDateString(`${languageTime}`, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    let capitalizer = xdate.textContent;
    capitalizer =
      capitalizer[0].toUpperCase() + capitalizer.slice(1, capitalizer.length);
    xdate.textContent = capitalizer;
    xtime.textContent = time.toLocaleTimeString(`${languageTime}`, {
      hour12: false,
    });
    setTimeout(showTime, 1000);
    if (isEng) {
      showGreetingsEN();
    } else showGreetingsUA();
  }

  showTime();

  function showGreetingsEN() {
    let greeting = document.getElementById("greeting");
    let partOfDay = getPartOfDayEN();
    greeting.textContent = `Good ${partOfDay}, `;
    isEng = true;
  }

  function showGreetingsUA() {
    let greeting = document.getElementById("greeting");
    let partOfDay = getPartOfDayUA();
    greeting.textContent = `${partOfDay}, `;
    isEng = false;
  }

  function getPartOfDayEN() {
    let time = new Date();
    let hours = time.getHours();
    switch (Math.floor(hours / 6)) {
      case 0:
        return "night";
        break;
      case 1:
        return "morning";
        break;
      case 2:
        return "afternoon";
        break;
      case 3:
        return "evening";
        break;
    }
  }

  function getPartOfDayUA() {
    let time = new Date();
    let hours = time.getHours();
    switch (Math.floor(hours / 6)) {
      case 0:
        return "Доброї ночі";
        break;
      case 1:
        return "Доброго ранку";
        break;
      case 2:
        return "Добрий день";
        break;
      case 3:
        return "Добрий вечір";
        break;
    }
  }

  if (language == "en") {
    showGreetingsEN();
  } else showGreetingsUA();

  englishLang.addEventListener("click", () => {
    showGreetingsEN();
    cityInput.placeholder = 'Kalush';
    nameInput.placeholder = "[Enter name]";
    ukraineLang.classList.toggle("activeLang");
    ukraineLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("activeLang");
    language = "en";
    languageTime = "en-US";
    let lang = "en";
    localStorage.setItem("lang", lang);
    language = lang;
    let langTime = "en-US";
    localStorage.setItem("langTime", langTime);
    languageTime = langTime;
    getWeather();
    getQuotes();
  });
  ukraineLang.addEventListener("click", () => {
    showGreetingsUA();
    cityInput.placeholder = 'Калуш';
    nameInput.placeholder = "[Введіть ім'я]";
    ukraineLang.classList.toggle("activeLang");
    ukraineLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("inactiveLang");
    englishLang.classList.toggle("activeLang");
    language = "ua";
    languageTime = "uk";
    let lang = "ua";
    localStorage.setItem("lang", lang);
    language = lang;
    let langTime = "uk";
    localStorage.setItem("langTime", langTime);
    languageTime = langTime;
    getWeather();
    getQuotes();
  });




  nameInput.addEventListener("input", function () {
    let name = nameInput.value;
    localStorage.setItem("name", name);
    document.getElementById("savedName").innerHTML = name;
  });
  let savedName = localStorage.getItem("name");
  if (savedName) {
    nameInput.value = savedName;
    document.getElementById("savedName").textContent = savedName;
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNum = getRandomNum(1, 20);

  function setBg() {
    let timeOfDay = getPartOfDayEN();
    let bgNum = randomNum + "";
    bgNum = bgNum.padStart(2, "0");
    let body = document.querySelector("body");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/IhorSusoi/backgrounds_momentum/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener("load", () => {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/IhorSusoi/backgrounds_momentum/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    });
  }
  setBg();

  function getSlidePrev() {
    if (randomNum == 1) {
      randomNum = 20;
    } else randomNum--;
    setBg();
    return;
  }

  function getSlideNext() {
    if (randomNum == 20) {
      randomNum = 1;
    } else randomNum++;
    setBg();
    return;
  }

  let slidePrev = document.getElementById("slidePrev");
  let slideNext = document.getElementById("slideNext");

  slidePrev.addEventListener("click", getSlidePrev);
  slideNext.addEventListener("click", getSlideNext);

  let city = "Kalush";

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=553daacacff92b4b81ef6bef38bb8c54&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod == "404") {
      cityInput.value = savedCity;
      city = savedCity;
      document.getElementById("savedCity").textContent = savedCity;
      alert("city not found");
      localStorage.setItem("city", city);
      getWeather();
      return;
    }
    if (data.cod == "400") {
      city = "Kalush";
      localStorage.setItem("city", city);
      savedCity = localStorage.getItem("city");
      alert("empty request, city changed to Kalush");
      getWeather();
      return;
    }
    weatherWindDir = weatherWindDirection(data.wind.deg);
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (language == "en") {
      weatherHumidity.textContent = "Humidity: " + data.main.humidity + "%";
      weatherWind.textContent =
        "Wind: " + Math.ceil(data.wind.speed) + " m/s " + weatherWindDir;
    }
    if (language == "ua") {
      weatherHumidity.textContent = "Вологість: " + data.main.humidity + "%";
      weatherWind.textContent =
        "Вітер: " + Math.ceil(data.wind.speed) + " м/с " + weatherWindDir;
    }
    if (data.wind.deg) {
      weatherWindArrow.style.transform = `rotate(${data.wind.deg}deg)`;
      weatherWindArrow.style.display = "block";
    } else {
      weatherWindArrow.style.display = "none";
    }
    city = cityInput.value;
    localStorage.setItem("city", city);
    savedCity = localStorage.getItem("city");
  }

  
  cityInput.addEventListener("input", function () {
    city = cityInput.value;
 
    localStorage.setItem("city", city);
    document.getElementById("savedCity").innerHTML = city;
  });
  let savedCity = localStorage.getItem("city");
  if (savedCity) {
    cityInput.value = savedCity;
    city = savedCity;
    document.getElementById("savedCity").textContent = savedCity;
  }

  cityInput.addEventListener("change", getWeather);

  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const weatherHumidity = document.querySelector(".humidity");
  const weatherWind = document.querySelector(".wind");
  let weatherWindDir = "";
  const weatherWindArrow = document.querySelector("#windDirection");

  function weatherWindDirection(x) {
    if (language == "en") {
      if (x >= 350 || (x <= 10 && x != 0)) return "N";
      if (x > 10 && x < 80) return "NE";
      if (x >= 80 && x <= 100) return "E";
      if (x > 100 && x < 170) return "SE";
      if (x >= 170 && x <= 190) return "S";
      if (x > 190 && x < 260) return "SW";
      if (x >= 260 && x <= 280) return "W";
      if (x > 280 && x < 350) return "NW";
      return "";
    }
    if (language == "ua") {
      if (x >= 350 || (x <= 10 && x != 0)) return "Пн";
      if (x > 10 && x < 80) return "ПнСх";
      if (x >= 80 && x <= 100) return "Сх";
      if (x > 100 && x < 170) return "ПдСх";
      if (x >= 170 && x <= 190) return "Пд";
      if (x > 190 && x < 260) return "ПдЗх";
      if (x >= 260 && x <= 280) return "Зх";
      if (x > 280 && x < 350) return "ПнЗх";
      return "";
    }
  }

  getWeather();

  async function getQuotes() {
    let quotes;
    if (language == "en") {
      quotes = "./js/quotes.json";
    } else {
      quotes = "./js/quotesUA.json";
    }
    const res = await fetch(quotes);
    const data = await res.json();
    let x = getRandomNum(0, 99);
    quoteQuote.textContent = data.quotes[x].quote;
    quoteAuthor.textContent = data.quotes[x].author;
  }

  const quoteQuote = document.querySelector(".quote");
  const quoteAuthor = document.querySelector(".author");
  const quoteChange = document.querySelector(".change-quote");

  quoteChange.addEventListener("click", () => {
    getQuotes();
    getWeather();
  });

  getQuotes();

  const audio = new Audio();

  function playAudio() {
    if (!isPlay) {
      audio.src = playList[playNum].src;
      audio.currentTime = 0;
      audio.play();
      isPlay = true;
      play.classList.toggle("pause");
    } else {
      audio.pause();
      isPlay = false;
      play.classList.toggle("pause");
    }
    playListHTMLNow[playNum].classList.toggle("playListYellow");
  }

  audio.addEventListener("ended", playNextFunc);

  function playNextFunc() {
    playListHTMLNow[playNum].classList.remove("playListYellow");
    if (playNum != playList.length - 1) {
      playNum++;
    } else playNum = 0;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListHTMLNow[playNum].classList.toggle("playListYellow");
  }

  function playPrevFunc() {
    playListHTMLNow[playNum].classList.remove("playListYellow");
    if (playNum != 0) {
      playNum--;
    } else playNum = playList.length - 1;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
    playListHTMLNow[playNum].classList.toggle("playListYellow");
  }

  let playNum = 0;
  let playListArr = playList;
  let playListHTML = document.getElementById("playList3");
  let play = document.getElementById("playButton");
  let playNext = document.getElementById("playNext");
  let playPrev = document.getElementById("playPrev");
  let isPlay = false;
  play.addEventListener("click", playAudio);
  playNext.addEventListener("click", playNextFunc);
  playPrev.addEventListener("click", playPrevFunc);
  playListArr.forEach((el) => {
    let li = this.createElement("li");
    li.classList.add("play-item");
    li.textContent = el.title;
    playListHTML.append(li);
  });
  let playListHTMLNow = document.querySelectorAll(".play-item");

  let settingsButton = document.getElementById("settings");
  let settingsDiv = document.querySelector(".settingsClass");
  settingsButton.addEventListener("click", () => {
    if (settingsDiv.style.left == "0px") {
      settingsDiv.style.left = "-65px";
    } else settingsDiv.style.left = "0px";
  });
});
