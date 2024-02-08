let nums = [2,7,11,15];
let target = 9;

var twoSum = function(nums, target) {
    // nums.sort((a,b)=>a-b);

    // let left = 0;
    // let right = nums.length-1;

    // while(left<right){
    //     let sum = nums[left]+nums[right];
    //     if(sum > target){
    //         right--;
    //     }
    //     else if(sum < target){
    //         left++;
    //     }
    //     else{
    //         return ([left, right]);
    //     }
    // }
    // return [];
    
    let hashTable = {};
    for(let i=0; i<nums.length; i++){
        let number = target-nums[i];
        if(number in hashTable){
            return [hashTable[number], i];
        }
        else{
            hashTable[nums[i]] = i;
        }
    }
};