//5607916 soda springs,5585010 fish haven
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4903330&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('ncurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('ntemp')
            .textContent = jsObject.main.temp_max;
        document.getElementById('nhumidity')
            .textContent = jsObject.main.humidity;
        document.getElementById('nspeed')
            .textContent = jsObject.wind.speed;

        runWindChillN();
    });

function runWindChillN() {
    var temp = parseFloat(document.getElementById('ntemp').textContent);
    var speed = parseFloat(document.getElementById('nspeed').textContent);
    if (temp <= 50 && speed >= 3) {
        var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        document.getElementById('ncalc').innerHTML = Math.round(calc);
    } else {
        document.getElementById('ncalc').innerHTML = 'N/A';
    }
}
