/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let sum = 0;
    let minLength = n + 1;

    let start = 0, end = 0;

    while (end < n) {
        sum += nums[end];

        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }

        end++;
    }

    return minLength !== n + 1 ? minLength : 0;
};


// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(51, [1,4,45,6,10,19]));
console.log(minSubArrayLen(4, [1,4,4]));