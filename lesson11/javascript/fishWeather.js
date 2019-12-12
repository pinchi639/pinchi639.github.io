  
const currentAPI = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=5b357b858d796c9a6d872ac3b2db7973';

fetch(currentAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
         
       
     document.getElementById('currentTemp').textContent = jsObject.weather[0].description;
     document.getElementById('temperature').textContent = jsObject.main.temp.toFixed(0);
     document.getElementById('humidity').textContent = jsObject.main.humidity;
     document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(1);
    
    });

//Forecast//
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=6a75ea9bff90407ac460f2b0f0297e8b';

fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {

                const f = (day.main.temp);
                var fahrenheit = f.toFixed(0);
                document.getElementById("data" + day_count).textContent = fahrenheit;
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';  
                console.log(imagesrc);
                const desc = day.weather[0].description;
                let idimg = 'temp' + day_count;
                document.getElementById(idimg).setAttribute('src', imagesrc); 
                document.getElementById(idimg).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }
windChill();
    });