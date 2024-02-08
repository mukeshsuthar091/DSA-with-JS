let str = "06:05:45AM";

let time = str.substring(0, str.length-2);
let part = str.substring(str.length-2);

time = time.split(":").map(Number);

if(part === "PM" && time[0] === 12){
    time[0] = 12;
}
else if(part === "PM" && time[0] !== 12) {
    time[0] = (time[0]+12)%24;
}
else if(part === "AM" && time[0] === 12){
    time[0] = 0;
}

let newTime = time.map(String).map(s => s.padStart(2, "0")).join(":");

console.log(newTime)