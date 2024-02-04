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

function twoSum(nums, target){
    let hashTable = {};

    for(let i=0; i<nums.length; i++){
        if(nums[i] in hashTable){
            continue;
        }
        else{
            hashTable[nums[i]] = i;
        }
    }

    for(let i=0; i<nums.length; i++){
        const complement = target-nums[i];
        if(complement in hashTable){
            return [i, hashTable[complement]];
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9))