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

