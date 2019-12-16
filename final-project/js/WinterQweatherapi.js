const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.3341&lon=95.9662&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('wcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('wtemp')
            .textContent = jsObject.main.temp_max;
        document.getElementById('whumidity')
            .textContent = jsObject.main.humidity;
        document.getElementById('wspeed')
            .textContent = jsObject.wind.speed;

        runWindChillW();
    });

function runWindChillW() {
    var temp = parseFloat(document.getElementById('wtemp').textContent);
    var speed = parseFloat(document.getElementById('wspeed').textContent);
    if (temp <= 50 && speed >= 3) {
        var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        document.getElementById('wcalc').innerHTML = Math.round(calc);
    } else {
        document.getElementById('wcalc').innerHTML = 'N/A';
    }
}
