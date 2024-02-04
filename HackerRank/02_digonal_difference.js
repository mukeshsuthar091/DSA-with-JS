// let arr = [[1,2,3], [4,5,6], [7,8,9]];
let arr = [[11,2,4], [4,5,6], [10,8,-12]];
let d1=0, d2=0;

for(let i=0; i<arr.length; i++){

    d1 = d1+arr[i][i];
    d2 = d2+arr[i][arr.length-1-i];

}

console.log(Math.abs(d1-d2));