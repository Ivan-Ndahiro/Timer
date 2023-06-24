function nowTime(){
    document.getElementById("Time").innerHTML=Date();
    setInterval(nowTime,1000);
}
function count(){
    x = document.getElementById("fulltime").value;
    dateObj = new Date(x);

    m=dateObj.getMonth()+1;
    d=dateObj.getDate();
    y=dateObj.getFullYear();
    h=dateObj.getHours();
    mi=dateObj.getMinutes();
    
    selectedDate=m+" "+d+", "+y+" "+h+":"+mi;

    const futureTime = new Date(selectedDate).getTime();
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
