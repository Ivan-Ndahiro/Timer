function nowTime(){ //Grabs the current time when button pressed and updates every second
    document.getElementById("Time").innerHTML=Date();
    setInterval(nowTime,1000);
}
function count(){ //Main function to calculate the countdown

    //Takes input
    input = document.getElementById("fulltime").value;

    //Grabs input and current time, converts to Date format and calculates the difference
    futureTime = new Date(input).getTime();
    currentTime = new Date().getTime();
    diff = futureTime - currentTime;

    //Formats each unit in milliseconds
    sec=1000;
    min=sec*60;
    hour=min*60;
    day=hour*24;
    month=day*30.4117;
    year=month*12;

    //Calculates each unit for the difference and outputs in a rounded down value
    Years = Math.floor(diff/year);
    Months = Math.floor((diff%year)/month);
    Days = Math.floor((diff%month)/day);
    Hours = Math.floor((diff%day)/hour);
    Minutes = Math.floor((diff%hour)/min);
    Seconds = Math.floor((diff%min)/sec);

    //Displays the countdown value in readable text
    document.getElementById("MyTime").innerHTML= Years + " years " + Months + " months " + Days + " days "
    + Hours + " hours " + Minutes + " minutes " + Seconds + " seconds ";

    //Once the countdown is done, outputs a string
    if (diff<0){
    document.getElementById("MyTime").innerHTML="Done!";
    }

    //Updates the countdown each second
    setInterval(count,1000);
}