/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let n = nums.length;
    // let left = 0;
    // let right = 0;

    let count = 0;
    let sum = 0;
    
    // while(left<=right && right<nums.length){
    //     sum += nums[right];
    //     if(sum === k){
    //         count += 1;
    //     }
    //     else if(sum>k || sum<0 || right>=nums.length){
    //         sum = 0;
    //         left++;
    //         right = left;
    //         continue;
    //     }
    //     right++;
    // }

    for(let i=0; i<n; i++){
        sum = 0;
        for(let j=i; j<n; j++){
            sum+=nums[j];
            
            if(sum===k){
                count++;
            }
        }
        
    }
    return count;
};

console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([1], 1))
console.log(subarraySum([-1,-1,1], 0))