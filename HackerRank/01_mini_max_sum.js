let arr1 = [1,2,3,4,5];
let sum = 0;

for(let value of arr1){
    sum += value;
}

let min = sum - Math.max(...arr1);
let max = sum - Math.min(...arr1);

console.log(min+" "+max);