var currentDate = new Date();
var currentDateString;

//get day of the week
var weekDayNumber = currentDate.gerDay();

var daysOfWEeek = [
'Sunday'
'Monday'
'Tuesday'
'Wednesday'
'Thursday'
'Friday'
'Saturday'

];

var weekDay = daysOfWEeek[weekDayNumber];

currentDate = weekDay + ', ';
currentDateString += currentDate.getDate();   

var months = [
    'January'
    'February'
    'March'
    'April'
    'May'
    'June'
    'July'
    'August'
    'September'
    'October'
    'November'
    'December'
];
var monthNumber = currentDate.getMonth();
var month = months[monthNumber];
currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDate;


