let time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
let hours = time.getHours()*30;
hours = hours += 90;
console.log(hours);

function hour(){
     document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hours}deg)`;
}
hour();
