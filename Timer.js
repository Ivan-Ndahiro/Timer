function nowTime(){
    document.getElementById("Time").innerHTML=Date();
    setInterval(nowTime,1000);
}
function count(){  
    var input = "June 21, 2024 00:00:00";
    input= document.getElementById('time');
    console.log(input);

    const futureTime = new Date("June 21, 2024 00:00:00").getTime();
    console.log(futureTime);
    const currentTime = new Date().getTime();
    const diff = futureTime - currentTime;

    const sec=1000;
    const min=sec*60;
    const hour=min*60;
    const day=hour*24;
    const month=day*30.4117;
    const year=month*12;

    const Years = Math.floor(diff/year);
    const Months = Math.floor((diff%year)/month);
    const Days = Math.floor((diff%month)/day);
    const Hours = Math.floor((diff%day)/hour);
    const Minutes = Math.floor((diff%hour)/min);
    const Seconds = Math.floor((diff%min)/sec);

    document.getElementById("MyTime").innerHTML= Years + " years " + Months + " months " + Days + " days "
    + Hours + " hours " + Minutes + " minutes " + Seconds + " seconds ";
    if (diff<0){
    document.getElementById("MyTime").innerHTML="Done!";
    }

    setInterval(count, 1000);
}


/*
const futureTime = new Date('June 21, 2024 00:00:00').getTime();
    console.log(futureTime);
    const currentTime = new Date().getTime();
    const diff = futureTime - currentTime;
*/