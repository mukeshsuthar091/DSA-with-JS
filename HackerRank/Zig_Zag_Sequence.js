// let arr = [2,3,5,1,4];
let arr = [1,2,3,4,5,6,7];

function zigZagSequence(arr){
    let n = arr.length;
    let mid = Math.floor(n/2)
    arr.sort((a,b)=> a-b);

    let start = mid;
    let end = n-1;
    while(start<=end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    console.log(arr.join(" "));
}

zigZagSequence(arr);