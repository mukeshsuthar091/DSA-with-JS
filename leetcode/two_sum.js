// This are better solution  (using hash table)
// -----------------------------------------------------------

// function twoSum(nums, target) {
    
//     const numIndices = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         if (numIndices.has(complement)) {
            
//             console.log(numIndices.get(complement))
//             return [numIndices.get(complement), i];
//         }
        
//         numIndices.set(nums[i], i);
//     }
  
//     return [];
// }

// ------------------------------------------------

// function twoSum(nums, target){
//     let numIndices = {};

//     for(let i=0; i<nums.length; i++){
//         const complement = target - nums[i];

//         if(complement in numIndices){
//             return [numIndices[complement], i];
//         }

//         numIndices[nums[i]] = i;
//     }

//     return [];
// }

// ------------------------------------------------

// function twoSum(nums, target){
//     let hashTable = {};

//     for(let i=0; i<nums.length; i++){
//         if(nums[i] in hashTable){
//             continue;
//         }
//         else{
//             hashTable[nums[i]] = i;
//         }
//     }

//     for(let i=0; i<nums.length; i++){
//         const complement = target-nums[i];
//         if(complement in hashTable){
//             return [i, hashTable[complement]];
//         }
//     }
//     return [];
// }


// This is a optimal solution (using two pointer)
// -----------------------------------------------------------

function twoSum(nums, target){
    nums.sort((a,b)=>a-b);

    let left = 0;
    let right = nums.length-1;
    while(left<right){
        let sum = nums[left]+nums[right];
        // console.log(sum)
        if(sum === target){
            return [left, right];
        }
        else if(sum > target)  right--;
        else left++;
    }
}


console.log(twoSum([3,2,4], 6))
// console.log(twoSum([2,7,11,15], 18))