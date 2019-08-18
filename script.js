function run() {
    var time = new Date();
    var day = time.getDay();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var hour = time.getHours();
    var milisecond = time.getMilliseconds();
    if (hour <= 12) {
        hour = hour;
    } else if (hour > 12) {
        hour = hour - 12;
    }
    var hourDegree = 30 * ((hour % 12) + (minute / 60));
    console.log(hourDegree);
    var minuteDegree = 6 * minute;
    var secondDegree = 6 * second;
    var milisecondDegree = 0.36 * milisecond;
    var secondTailDegree = secondDegree;

    if (day == 0) {
        day = "Sunday";
    }
    if (day == 1) {
        day = "Monday";
    }
    if (day == 2) {
        day = "Tuesday";
    }
    if (day == 3) {
        day = "Wednesday";
    }
    if (day == 4) {
        day = "Thursday";
    }
    if (day == 5) {
        day = "Friday";
    }
    if (day == 6) {
        day = "Saturday";
    }
    document.querySelector(".hour").style.transform = `rotate(${hourDegree}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minuteDegree}deg)`;
    document.querySelector(".second").style.transform = `rotate(${secondDegree}deg)`;
    document.querySelector(".milisecond").style.transform = `rotate(${milisecondDegree}deg)`;
    document.querySelector(".secondTail").style.transform = `rotate(${secondTailDegree}deg)`;
    document.querySelector(".day").innerHTML = `${day}`;
    if (hour < 10) {
        hour = "0" + hour;
    } else {
        hour = hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    } else {
        minute = minute;
    }
    if (second < 10) {
        second = "0" + second;
    } else {
        second = second;
    }

    document.querySelector("div.refrencetime").innerHTML =
        `
<span>${hour}</span> :
<span>${minute}</span> :
<span>${second}</span>
`

}
setInterval(run, 1);


function draw() {
    circle(0, 0, 250)
}