let arr = [11,12,13,14,15,16,17,18];

function findMedium(arr){
    let midIndex = Math.floor((arr.length/2));
    let sortedArr = arr.sort((a,b) => a-b);
    // console.log(sortedArr)

    if(arr.length%2==0){
        return (sortedArr[midIndex-1] + sortedArr[midIndex])/2;
    }
    else{
        return sortedArr[midIndex];
    }

}

console.log(findMedium(arr));