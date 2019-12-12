const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5b357b858d796c9a6d872ac3b2db7973&units=imperial';


fetch(apiURL)
    .then((response) => response.json())
    .then((currentWeather) => {
        //debugging console.log
        console.log(currentWeather.main.temp);

        let currentTemp = currentWeather.main.temp;
        let currentImageIcon = currentWeather.weather[0].icon;
        let currentImage = 'https://openweathermap.org/img/w/' + currentImageIcon + '.png';


        document.querySelector('#current-temp').textContent = currentTemp;

        document.querySelector('#imagesrc').textContent = currentImage;

        document.querySelector('#weather-icon').setAttribute('src', currentImage);

        document.querySelector('#weather-icon').setAttribute('alt', currentWeather.weather[0].main);
    }
    );