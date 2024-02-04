let timeStr = "07:05:45PM";

let time = timeStr.substring(0, timeStr.length-2);
let timePeriod = timeStr.substring(timeStr.length-2);

time = time.split(":").map(Number);
// console.log(time)

if(timePeriod === "PM" && time[0] === 12){
    time[0] = 12;
}
else if(timePeriod === "PM" && time[0] !== 12){
    time[0] = time[0] + 12;
}
else if(timePeriod === "AM" && time[0] === 12){
    time[0] = 0;
}

let newTime = time.map(String).map(s => s.padStart(2, "0")).join(":");
// newTime = [newTime, timePeriod].join("")

console.log(newTime)