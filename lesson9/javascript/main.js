var currentDate = new Date();
var currentDateString;

//get day of the week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'

];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';
currentDateString += currentDate.getDate();   
console.log(currentDateString);
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var monthNumber = currentDate.getMonth();
var month = months[monthNumber];
currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();
console.log(currentDateString);

document.getElementById('currentDate').innerHTML = currentDateString;

/*five day forecast

let currentDate = weekDayNumber;
for (let i = 1; i < 6; i++) {  

// add one day
currentDate++;

// if current day os greater than 6 (Saturday), reser it to 0(Sunday)
if (currentDate > 6) {
    currentDate = 0;
}
// asign value to to placeholder in HTML
const element = document.getElementById(`day${i}`);

element.innerHTML = daysOfWeek[currentDate];
}
*/
//show/hide panckes
if (weekDayNumber === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}