setInterval(printTime, 1);

function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}   
