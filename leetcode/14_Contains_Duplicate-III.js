/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, indexDiff, valueDiff) {
    let n = nums.length;

    // ------------ Brute Force solution ----------------
    // for(let i=0; i<n; i++){
    //     for(let j=0; j<n; j++){
    //         let indexD = Math.abs(i-j);
    //         let valueD = Math.abs(nums[i]-nums[j]);
    //         if(i!==j){
    //             if(indexD<=indexDiff && valueD<=valueDiff){
    //                 return true;
    //             }
    //         }
    //     }
    // }
    // return false;

    // ------------ optimize solution ----------------

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Get the bucket for the current number
        const bucket = Math.floor(nums[i] / (valueDiff + 1));

        // Check if the current bucket or neighboring buckets contain a number within t distance
        if (map.has(bucket) ||
            map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= valueDiff ||
            map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) <= valueDiff) {
            return true;
        }

        // Remove the leftmost element if the window size exceeds k
        if (map.size >= indexDiff) {
            const leftmostBucket = Math.floor(nums[i - indexDiff] / (valueDiff + 1));
            map.delete(leftmostBucket);
        }

        // Add the current number to the map
        map.set(bucket, nums[i]);
    }

    return false;
};
    
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyDuplicate([1,5,9,1,5,9], 2, 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1, 2));
// console.log(containsNearbyDuplicate([8,7,15,1,6,1,9,15], 1, 3));
// console.log(containsNearbyDuplicate([1, 2, 5, 6, 7, 2, 4], 4, 0));
// console.log(containsNearbyDuplicate([1, 2, 1, 1], 1, 0));
