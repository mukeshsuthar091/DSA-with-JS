let arr = [2,5,32,8,18,10,12,1,16,0];
n= arr.length

for(let i=1; i<n; i++){
    current = arr[i];
    j = i-1;

    while(arr[j]>current && j>=0){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
}

console.log(arr)