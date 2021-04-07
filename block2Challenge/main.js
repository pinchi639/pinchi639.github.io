//create function to calculate miles used per gallon
function computePay() {
    //convert input to numbers
    var worked = parseFloat(document.getElementById('worked').value);
    var wage = parseFloat(document.getElementById('wage').value);


    //compute wage
    var gross = worked * wage;
    var tax = gross * 0.15;
    var net = gross - tax;
    net = net.toFixed(2);

    localStorage.setItem("NetPay", net);
    return net;
}

function displayPay() {
    document.getElementById('output').innerHTML = "$" + computePay();
}

function getExpenses() {

    // get user input and convert it
    var food = parseFloat(document.getElementById('food').value);
    var entertainment = parseFloat(document.getElementById('entertainment').value);
    var clothes = parseFloat(document.getElementById('clothes').value);
    var charity = parseFloat(document.getElementById('charity').value);
    var other = parseFloat(document.getElementById('other').value);

    var foodPercentage = (food / 100) * computePay();
    foodPercentage = foodPercentage.toFixed(2);
    localStorage.setItem("AmountToFood", foodPercentage);
    var entertainmentPercentage = (entertainment / 100) * computePay();
    entertainmentPercentage = entertainmentPercentage.toFixed(2);
    localStorage.setItem("AmountToEntertainment", entertainmentPercentage);
    var clothesPercentage = (clothes / 100) * computePay();
    clothesPercentage = clothesPercentage.toFixed(2);
    localStorage.setItem("AmountToClothes", clothesPercentage);
    var charityPercentage = (charity / 100) * computePay();
    charityPercentage = charityPercentage.toFixed(2);
    localStorage.setItem("AmountToCharity", charityPercentage);
    var otherPercentage = (other / 100) * computePay();
    otherPercentage = otherPercentage.toFixed(2);
    localStorage.setItem("AmountToOther", otherPercentage);

    document.getElementById('expenseOutput').innerHTML = "Amount to food: $" + foodPercentage + "<br/>"
        + "Amount to entertainment: $" + entertainmentPercentage + "<br/>"
        + "Amount to clothes: $" + clothesPercentage + "<br/>"
        + "Amount to charity: $" + charityPercentage + "<br/>"
        + "Amount to other: $" + otherPercentage;

}

function getFoodPercentage() {
    var food = parseFloat(document.getElementById('food').value);
    var foodPercentage = (food / 100) * computePay();
    foodPercentage = foodPercentage.toFixed(2);
    return foodPercentage;
}

function getEntertainmentPercentage() {
    var entertainment = parseFloat(document.getElementById('entertainment').value);
    var entertainmentPercentage = (entertainment / 100) * computePay();
    entertainmentPercentage = entertainmentPercentage.toFixed(2);
    return entertainmentPercentage;
}

function getClothesPercentage() {
    var clothes = parseFloat(document.getElementById('clothes').value);
    var clothesPercentage = (clothes / 100) * computePay();
    clothesPercentage = clothesPercentage.toFixed(2);
    return clothesPercentage;
}

function getCharityPercentage() {
    var charity = parseFloat(document.getElementById('charity').value);
    var charityPercentage = (charity / 100) * computePay();
    charityPercentage = charityPercentage.toFixed(2);
    return charityPercentage;
}

function getOtherPercentage() {
    var other = parseFloat(document.getElementById('other').value);
    var otherPercentage = (other / 100) * computePay();
    otherPercentage = otherPercentage.toFixed(2);
    return otherPercentage;
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

if (localStorage.getItem("NetPay") === null) {
    localStorage.style.display === "none";
} else {

    document.getElementById("localStorage").innerHTML = "Net Pay: $" + localStorage.getItem("NetPay") + "<br/>"
        + "Amount to food: $" + localStorage.getItem("AmountToFood") + "<br/>"
        + "Amount to entertainment: $" + localStorage.getItem("AmountToEntertainment") + "<br/>"
        + "Amount to clothes: $" + localStorage.getItem("AmountToClothes") + "<br/>"
        + "Amount to charity: $" + localStorage.getItem("AmountToCharity") + "<br/>"
        + "Amount to other: $" + localStorage.getItem("AmountToOther");
}