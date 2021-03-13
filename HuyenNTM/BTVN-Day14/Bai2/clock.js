function clock() {
    let today = new Date();
    let h;
    let a;
    if (today.getHours() > 12) {
        h = today.getHours() - 12;
        a = 'PM';
    } else {
        h = today.getHours();
        a = 'AM';
    }
    if (h < 10) {
        h = '0' + h;
    }
    //let h = today.getHours();



    let m;
    if (today.getMinutes() < 10) {
        m = '0' + today.getMinutes();
    } else {
        m = today.getMinutes();
    }
    //let m = today.getMinutes();



    let s;
    if (today.getSeconds() < 10) {
        s = '0' + today.getSeconds();
    } else {
        s = today.getSeconds();
    }
    //let s = today.getSeconds();



    let time = h + ":" + m + ":" + s + " " + a;
    document.getElementById("clock").innerHTML = time;
    console.log(time);
}
setInterval(clock, 1000);