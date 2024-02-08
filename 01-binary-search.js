let arr = [3,5,1,9,6,0,4,10,12];
let item = 6;

// arr.sort((a,b) => a-b)
console.log(arr.sort((a,b) => a-b))

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }
        else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, item));