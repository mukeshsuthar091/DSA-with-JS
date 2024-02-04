let arr = [2,6,1,7,4,10,9,0];

// -------------------------------------
// Linear search
// -------------------------------------

// let item = 4;
// let i;

// for(i=0; i<arr.length; i++){
//     if(arr[i]===item){
//         console.log(`${item} is present at ${i} position in array.`);
//         break;
//     }
// }

// if(i==arr.length){
//     console.log(`${item} is not present in array.`);
// }


// -------------------------------------
// Binary search
// -------------------------------------


let array = [2,6,1,7,4,10,9,0];

array.sort((a,b)=> a-b);

function binarySearch(arr, val){
    let leftIndex = 0;
    let rightIndex = arr.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);

        if(val === arr[middleIndex]){
            return middleIndex;
        }
        
        if(val < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }
        else{
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(array)
console.log(binarySearch(array, 6))
