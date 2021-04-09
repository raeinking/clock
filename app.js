setInterval (clock, 1000);
const secondhand = document.querySelector('.second');
const minutehand = document.querySelector('.minute');
const hourhand = document.querySelector('.hour');

function clock() {
    const date = new Date() ;

    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    //add math for rotate
    const rosecond = second * 6;
    const rominute = minute * 6;
    const rohour = hour * 14.4;

    console.log(rohour);

    secondhand.style.transform =  `rotate(${rosecond}deg)`;
    minutehand.style.transform = `rotate(${rominute}deg)`;
    hourhand.style.transform = `rotate(${rohour}deg)`;

}



 