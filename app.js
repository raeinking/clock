setInterval (clock, 1000);
const secondhand = document.querySelector('.second');
const minutehand = document.querySelector('.minute');
const hourhand = document.querySelector('.hour');

function clock() {
    const date = new Date() ;

    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    //add math for hour point
    const numpoint= Math.floor(minute * 1.666);

    //function for 24 to 12 clock
    if(hour > 12) {
        var a = hour;
        var s = 12;
        var d = a - s;
    }
    var c = d +"."+numpoint;
    console.log(c);

    //add math for rotate all hands
    const rosecond = second * 6;
    const rominute = minute * 6;
    const rohour = c * 30;

    //add style of rotate
    secondhand.style.transform =  `rotate(${rosecond}deg)`;
    minutehand.style.transform = `rotate(${rominute}deg)`;
    hourhand.style.transform = `rotate(${rohour}deg)`

}

