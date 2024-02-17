var singleNumber = function(nums){
    let ones=0;
    let twos=0;
    
    for(let i=0; i<nums.length; i++){
        ones = (ones^nums[i]) & (~twos);
        twos = (twos^nums[i]) & (~ones);
    }

    return ones;
}

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))