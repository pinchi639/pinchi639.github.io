let currentTemp = 41;
let windSpeed = 8;
let humidity = 41;
let windChill = currentTemp;
document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;';
document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';
document.getElementById("humidity").innerHTML = humidity + '%';


if (currentTemp < 50 && windSpeed > 3) {
    console.log(currentTemp, windSpeed);
    windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
    document.getElementById("windChill").innerHTML = windChill.toFixed(1) + '&deg;';
}

if (windChill === 0) {
    document.getElementById("windChill").innerHTML = windChill + '&dep;';
}