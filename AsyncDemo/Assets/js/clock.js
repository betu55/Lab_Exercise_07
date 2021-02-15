const deg = 6;

const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

function rotation() {
    let currentTime = new Date();
    let hour = currentTime.getHours() * 30;
    let minute = currentTime.getMinutes() * deg;
    let second = currentTime.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hour}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;

}

setInterval(rotation, 1000);

