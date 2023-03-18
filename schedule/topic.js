var topic = [
    "HTML",
    "CSS",
    "JS",
    "swing",
    "停課"
];

var startoddDate = new Date();
var startevenDate = new Date();

//function def
function setMonthAndDay(startMonth,startDay)
{
    startoddDate.setMonth(startMonth-1,startDay);
    startoddDate.setHours(0);
    startoddDate.setMinutes(0);
    startoddDate.setSeconds(0);
    startevenDate.setMonth(startMonth-1,startDay+1);
    startevenDate.setHours(0);
    startevenDate.setMinutes(0);
    startevenDate.setSeconds(0);
}

setMonthAndDay(3,4); //Call function