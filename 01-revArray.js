let arr = new Array(11,12,13,14)
len=(arr.length)
n = Math.floor(len/2);

for(let i=0; i<n; i++){
    temp=arr[i];
    arr[i]=arr[len-1-i];
    arr[len-1-i]=temp;
}
console.log(arr)