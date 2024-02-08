/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hashTable =  {};
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] in hashTable){
            let indexDiff = Math.abs(hashTable[nums[i]] - i);
            if(indexDiff<=k){
                return true;
            }
            hashTable[nums[i]] = i;
        }
        else{
            hashTable[nums[i]] = i;
        }
    }

    return false;
};