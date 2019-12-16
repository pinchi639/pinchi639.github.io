const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5771826&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('bcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('btemp')
            .textContent = jsObject.main.temp_max;
        document.getElementById('bhumidity')
            .textContent = jsObject.main.humidity;
        document.getElementById('bspeed')
            .textContent = jsObject.wind.speed;

        runWindChillB();
    });

function runWindChillB() {
    var temp = parseFloat(document.getElementById('btemp').textContent);
    var speed = parseFloat(document.getElementById('bspeed').textContent);
    if (temp <= 50 && speed >= 3) {
        var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        document.getElementById('bcalc').innerHTML = Math.round(calc);
    } else {
        document.getElementById('bcalc').innerHTML = 'N/A';
    }
}
