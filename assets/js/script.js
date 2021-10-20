let time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
let hours = time.getHours()*30;
hours = hours += 90;
let minutes = time.getMinutes()*6;
minutes = minutes += 90;
console.log(minutes);

function hour(){
     document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hours}deg)`;
}
function minute(){
    document.getElementsByClassName('min-hand')[0].style.transform = `rotate(${minutes}deg)`;
}

hour();
minute();
