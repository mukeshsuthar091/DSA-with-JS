/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let n = nums.length;
//     let count = 0;
//     let sum = 0;
    // -------------- Brute Force -----------------

    // for(let i=0; i<n; i++){
    //     sum = 0;
    //     for(let j=i; j<n; j++){
    //         sum+=nums[j];
            
    //         if(sum===k){
    //             count++;
    //         }
    //     }
        
    // }
    
    // return count;
// };
// -------------------------------------
    
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1); // Initialize the map with sum=0 occurring once

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        // if(map.has(prefixSum)){
        //     map.set(prefixSum, map.get(prefixSum)+1)
        // }
        // else{
        //     map.set(prefixSum, 1)
        // }

        // ------- or--------
        map.set(sum, (map.get(sum) || 0) + 1);

    }


    return count;
};

// --------------------------------------------

console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([1], 1))
console.log(subarraySum([-1,-1,1], 0))
console.log(subarraySum([1,2,3,2], 3))
console.log(subarraySum([1,2,3,0], 3))
console.log(subarraySum([1,-1,0], 0))
console.log(subarraySum([3,-3,1,1,1], 3))
console.log(subarraySum([1,2,3,-3,1,1,1,4,2,-3], 3))