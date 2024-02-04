let arr = [-4, 3, -9, 0, 4, 1];
let countMinus=0, 
    countPlus=0, 
    countZero=0;

for(let element of arr){
    if(element > 0){
        countPlus += 1;
    }
    else if(element < 0){
        countMinus += 1;
    }
    else{
        countZero += 1;
    }
}

console.log((countPlus/arr.length).toFixed(6));
console.log((countMinus/arr.length).toFixed(6));
console.log((countZero/arr.length).toFixed(6));
