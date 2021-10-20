function setDate(){
    let time = new Date();
    let hours = time.getHours()*30 +90;
    let sec = time.getSeconds()*6 +90;
    let minutes = time.getMinutes()*6 + 90;
    document.getElementsByClassName('hour-hand')[0].style.transform = `rotate(${hours}deg)`;
    document.getElementsByClassName('min-hand')[0].style.transform = `rotate(${minutes}deg)`;
    document.getElementsByClassName('second-hand')[0].style.transform = `rotate(${sec}deg)`;
}
setDate();
setInterval(setDate,1000);







