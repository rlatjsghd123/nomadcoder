const clock = document.querySelector('.clock');

function time(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2, '0')
    const m = String(date.getMinutes()).padStart(2, '0')
    const s = String(date.getSeconds()).padStart(2, '0')
    const Years = date.getFullYear();
    const Dates = date.getDate();
    const Month = date.getMonth();
    clock.innerText = `${Years}.${Month}.${Dates} ${h}:${m}:${s}`;
}

time();
setInterval(time, 1000);

