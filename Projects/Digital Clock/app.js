const clock = document.querySelector('.clock');
const time = document.querySelector('.time');

// time.innerHTML=date;
setInterval(()=>{
    const date = new Date().toLocaleTimeString();
    time.innerHTML=date;
},100)

