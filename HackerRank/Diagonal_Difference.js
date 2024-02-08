let arr = [[1,2,3], [4,5,6], [9,8,9]];


let d1=0, d2=0;

for(let i=0; i<arr.length; i++){
    d1 += arr[i][i]
    d2 += arr[i][arr.length-i-1]
}
let diff = Math.abs(d1-d2)
console.log(d1, d2, diff)
