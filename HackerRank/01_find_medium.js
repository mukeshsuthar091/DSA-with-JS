let arr = [11,12,13,14,15,16,17,18];

let sortedArr = arr.sort((a,b)=> a-b);

function findMedium(arr){
    let size = arr.length;
    let mid = Math.floor(size/2);

    if(size%2==0){
        return (arr[mid-1] + arr[mid])/2;
    }
    else{
        return arr[mid];
    }
}

console.log(findMedium(sortedArr));