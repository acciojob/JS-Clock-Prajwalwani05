//your code here
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    let hour = document.getElementsByClassName("hour-hand")[0];
    let minute = document.getElementsByClassName("min-hand")[0];
    let second = document.getElementsByClassName("second-hand")[0];
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
    
   
},1000);