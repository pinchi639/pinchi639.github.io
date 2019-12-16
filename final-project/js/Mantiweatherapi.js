const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5542758&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('mcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('mtemp')
            .textContent = jsObject.main.temp_max;
        document.getElementById('mhumidity')
            .textContent = jsObject.main.humidity;
        document.getElementById('mspeed')
            .textContent = jsObject.wind.speed;

        runWindChillM();
    });

function runWindChillM() {
    var temp = parseFloat(document.getElementById('mtemp').textContent);
    var speed = parseFloat(document.getElementById('mspeed').textContent);
    if (temp <= 50 && speed >= 3) {
        var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        document.getElementById('mcalc').innerHTML = Math.round(calc);
    } else {
        document.getElementById('mcalc').innerHTML = 'N/A';
    }
}
