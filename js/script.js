

const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.play-prev');
const audio = new Audio();
let isPlay = false;
function playAudio() {
  isPlay=true;
  console.log(isPlay);
  //audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
  audio.src = 'stage1-tasks-momentum/assets/sounds/River Flows In You.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  isPlay=false;
  console.log(isPlay);
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);

const button = document.querySelector('.play');
function toggleBtn() {
  console.log(5);
  button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);

const timeOfDay = getTimeOfDay();
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if(hours<=5){return'night';
}else if(hours<=11){return 'morning'; 
}else if(hours<=17){return 'afternoon';
}else if(hours<=23){return 'evening';}
}

let randomNum=0;
function getRandomNum(){
  randomNum=Math.floor(Math.random()*10+5);
  if(randomNum<20 && randomNum>=1){randomNum=randomNum+1;
  }else{randomNum=1;}
  return randomNum;
}
getRandomNum();
//background download pages
const cBody = document.querySelector('body');
//const startHttps="url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const startHttps="url('https://raw.githubusercontent.com/bartcevich/stage1-tasks/assets/images/";
function setBg(){
  console.log(randomNum);
  let randomNum2='';
  if(randomNum<10){randomNum2=`0${randomNum}`;
}else{randomNum2=`${randomNum}`;}
  let resultHttps=`${startHttps}${timeOfDay}/${randomNum2}.jpg')`;
  cBody.style.backgroundImage = resultHttps;
}
setBg();

const SlideNext = document.querySelector('.slide-next');
SlideNext.addEventListener('click', getSlideNext);
function getSlideNext(){
  if(randomNum<20){randomNum=randomNum+1;
  }else{randomNum=1;}
  console.log(randomNum);
  setBg();
  return randomNum;
} 

const SlidePrev = document.querySelector('.slide-prev');
SlidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev(){
  if(randomNum===1){randomNum=20;
  }else{randomNum=randomNum-1;}
  console.log(randomNum);
  setBg();
  return randomNum;
} 
//greeting download pages
const greeting = document.querySelector('.greeting');
function showGreeting(){
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}

const date2 = document.querySelector('.date1');
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};
    //hour: 'numeric', minute: 'numeric', 
    const currentDate = date.toLocaleDateString('en-US', options);
    date2.textContent = currentDate;
  }

const time = document.querySelector('.time');//обращение по классу к блоку
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();//метод получения времени
    time.textContent = currentTime;//добавление текста в константу
    showDate();
    showGreeting();
    getTimeOfDay();
    setTimeout(showTime, 1000);//рекурсия с обновлением по секундам
  }
  showTime();

  const city = document.querySelector('.city');
  //function controlCity(){
   //   const Text1 = `Minsk`;
  //    city.textContent = Text1;
  //}
  //controlCity();
  console.log(city.textContent);
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
async function getWeather() {  
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=8e7f5bed3c16e750809bfa2d8ecb9ce2&units=metric`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=1830449d7252aada0baa31168dfe7b00&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  //console.log(city.textContent);//.textContent= присваивает строку тому что до точки, city.textContent выдает строкой содержимое указанного перед точкой
  //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)}m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()
function setCity(event) {
  //console.log(event);
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

  const name = document.querySelector('.name');
  function setLocalStorage() {
    localStorage.setItem('city4', city.value);
    localStorage.setItem('name1', name.value);
  }//set поставлять
  window.addEventListener('beforeunload', setLocalStorage)
  function getLocalStorage() {
    if(localStorage.getItem('name1')) {
      //city.value = localStorage.getItem('city4');
      name.value = localStorage.getItem('name1');
    }//get получчать
    if(localStorage.getItem('city4')) {
      city.value = localStorage.getItem('city4');
      //name.value = localStorage.getItem('name1');
    }
  }
  window.addEventListener('load', getLocalStorage)
  console.log(city.textContent);
