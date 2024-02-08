/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// function binarySearch(arr, target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;

//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);

//         if(target === arr[middleIndex]){
//             return true;
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1;
//         }
//         else{
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return false;
// }

// var searchMatrix = function(matrix, target) {

//     for(let arr of matrix){
//         if(binarySearch(arr, target)){
//             return true;
//         }
//     }
//     return false;
// };


// --------------------------------------------------------------

var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

console.log(searchMatrix(matrix, 3));
