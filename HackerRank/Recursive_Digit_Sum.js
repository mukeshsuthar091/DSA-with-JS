// let num = '116';
// let num = 116;
// let num = '9875987598759875';
let num = '148';

function superDigit(number, k){
    number = String(number).split("").map(Number);
    let sum = 0;
    for(let i of number){
        sum = sum+i
    }


    if(sum>=10){
        return superDigit(sum, number.length);    
    }
    else{
        return sum;
    }
}

console.log(superDigit(num, num.length));