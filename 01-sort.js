// insertion sort

let arr = [2,6,1,8,4,9,3,0]

for(let i=1; i<arr.length; i++){
    let current = arr[i];
    let j=i-1;

    while(arr[j]>current && j>=0){
        arr[j+1] = arr[j];
        j--;
    }

    arr[j+1] = current;
}

console.log(arr)

// selection sort

for(let i=0; i<arr.length; i++){
    let smallest = i;

    for(let j=i+1; j<arr.length; j++){
        if(arr[smallest] > arr[j]){
            smallest=j
        }
    }
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp
}

console.log(arr)

// bubble sort

for(let i=0; i<arr.length; i++){
    for(let j=0; j<(arr.length-1-i); j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)