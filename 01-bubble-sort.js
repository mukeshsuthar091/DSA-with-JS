let arr = [2,5,32,8,18,10,12,1,16,0];
n = arr.length;

for(let i=0; i<n; i++){
    for(let j=0; j<(n-1-i); j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr)