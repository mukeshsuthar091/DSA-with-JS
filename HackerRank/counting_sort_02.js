// let arr = [5, 2, 5, 5, 3, 1, 2, 5, 1, 5, 0, 5, 3, 1, 5, 2, 2, 2];
let arr = [1, 1, 3, 2, 1];

let max = -1;
for(let i of arr){
    max = Math.max(max, i);
}

let count = new Array(max+1).fill(0);
let sortedArr = new Array(arr.length).fill(0);

for(let a of arr){
    count[a] += 1;
}

let sum = 0;
for(let i=0; i<count.length; i++){
    sum += count[i]
    count[i] = sum;
}

for(let i=arr.length-1; i>=0; i--){
    let value = arr[i]
    count[value] -= 1;
    sortedArr[count[value]] = arr[i];
}
console.log(count, sortedArr)