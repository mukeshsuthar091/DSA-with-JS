let arr = [2,6,1,7,4,10,9,0]

for(let i=1; i<arr.length; i++){
    let current = arr[i];
    j=i-1;
    while(arr[j]>current && j>=0){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = current
}

console.log(arr)