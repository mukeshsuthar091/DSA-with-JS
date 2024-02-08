function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let left = [];
    let right = [];
    let pivot = arr[0];
    
    for(let i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else if(arr[i]>pivot){
            right.push(arr[i]);
        }
    }
    // console.log(pivot, left, right)
    return quickSort(left)+" "+pivot+" "+quickSort(right);
}

let arr = [2,15,4,8,0,19,3,10];

let sortedArr = quickSort(arr);
console.log(sortedArr);