let time = new Date();
let hours = time.getHours() * 30;
hours = hours += 90;
let minutes = time.getMinutes() * 6;
minutes = minutes += 90;
let sec = time.getSeconds() * 6;
sec = sec += 90;


function hour() {
    document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hours}deg)`;
}

function minute() {
    document.getElementsByClassName('min-hand')[0].style.transform = `rotate(${minutes}deg)`;
}

function seconds() {
    document.getElementsByClassName('second-hand')[0].style.transform = `rotate(${sec}deg)`;
}
hour();
minute();
seconds();

window.setInterval(function () {
    hour();
    minute();
    seconds();
}, 1000);