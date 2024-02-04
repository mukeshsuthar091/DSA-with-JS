let arr = [12,6,1,7,4,10,9,3]

for(let i=0; i<arr.length; i++){
    let smallest = i

    for(let j=i+1; j<arr.length; j++){
        if(arr[smallest]>arr[j]){
            smallest = j
        }
    }
    let temp = arr[smallest]
    arr[smallest] = arr[i]
    arr[i] = temp
}

console.log(arr)