var maxSubArray = function(nums){
    let sum = 0;
    let maxVal = nums[0];

    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        maxVal = Math.max(maxVal, sum);
        if(sum<0){
            sum = 0;
        }
    }
    
    return maxVal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))