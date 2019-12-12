function windChill() {
    let currentTemp = parseInt(document.getElementById("temperature").textContent);
    let windSpeed = parseInt(document.getElementById("windSpeed").textContent);
    let windChill = currentTemp;

    if (currentTemp < 50 && windSpeed > 3) {
        console.log("Data" + currentTemp, windSpeed);
        windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
        document.getElementById("windChill").innerHTML = windChill.toFixed(1) + '&deg;';
    }

    if (windChill === 0) {
        document.getElementById("windChill").innerHTML = windChill + '&deg;';
    }
    document.getElementById("windChill").innerHTML = windChill.toFixed(1) + '&deg;';
    console.log("here");
}