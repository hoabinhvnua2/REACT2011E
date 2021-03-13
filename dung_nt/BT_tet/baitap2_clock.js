function clock() {
    let dd = "AM";
    let getHour = new Date().getHours();
    let hour
    if(getHour < 10){
        hour = '0' + getHour;
    }
    if(getHour >= 12){
        hour = getHour - 12;
        dd = "PM";
    }
    if(hour == 0){
        hour = 12;
    }

    let getMinute = new Date().getMinutes();
    let min = (getMinute < 10) ? '0' + getMinute : getMinute;

    let getSecond = new Date().getSeconds();
    let sec = (getSecond < 10) ? '0' + getSecond : getSecond;

    let time = hour + ":" + min + ":" + sec + ' ' +  dd;
    document.getElementById("clock").innerHTML = time;
}
setInterval(clock,1000);     
