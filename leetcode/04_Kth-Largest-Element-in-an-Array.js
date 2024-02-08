const { Heap } = require('heap-js');

// var findKthLargest = function(nums, k) {
    // let kthElement = 0;
    // for(let i=0; i<k; i++){
    //     let max = Math.max(...nums);
    //     kthElement = nums.splice(nums.indexOf(max), 1);
    // }
    // return kthElement.pop();

// };

// --------------------------------------------
// var findKthLargest = function(nums, k) {

//     let minHeap = new Heap();            //install (npm i heap-js)
//     for(let i of nums){
//         minHeap.push(i);
//         if(minHeap.length>k){
//             minHeap.pop();
//         }
//     }

//     return minHeap.peek()
// };

// --------------------------------------------

// var findKthLargest = function(nums, k){
//     let minVal = Infinity;
//     let maxVal = -Infinity;

//     for(let num of nums){
//         minVal = Math.min(minVal, num);
//         maxVal = Math.max(maxVal, num);
//     }

//     let arr = new Array(maxVal-minVal+1).fill(0);
//     // console.log(arr);
//     for(let num of nums){
//         arr[num-minVal]++;
//     }

//     let count = 0;
//     for(let i=arr.length-1; i>=0; i--){
//         count += arr[i];
//         if(count >= k) return i+minVal;
//     }
// }

// console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))


function findKthLargest(nums, k){
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    
    for(let num of nums){
        max = Math.max(max, num)
        min = Math.min(min, num)
    }

    let arr = new Array(max-min+1).fill(0);
    for(let num of nums){
        arr[num-min] += 1;
    }
    console.log(arr)
    
    let count = 0;
    for(let i=arr.length-1; i>=k; i--){
        count += arr[i];
        // if(count>=k) return count;
    }
    return count+1
}
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))
console.log(findKthLargest([3,2,1,5,6,4],2))