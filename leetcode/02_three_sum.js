//--------------------- using Two pointers ------------------------

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
        let answer = [];
        
        if (nums.length < 3) {
            return answer;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                break;
            }
            
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                const sum = nums[i] + nums[low] + nums[high];
                if (sum > 0) {
                    high--;
                } else if (sum < 0) {
                    low++;
                } else {
                    answer.push([nums[i], nums[low], nums[high]]);
                    let lastLowOccurrence = nums[low];
                    let lastHighOccurrence = nums[high];
                    
                    while (low < high && nums[low] === lastLowOccurrence) {
                        low++;
                    }
                    
                    while (low < high && nums[high] === lastHighOccurrence) {
                        high--;
                    }
                    
                }
            }
        }
        return answer;
};


//--------------------- using Hashing ------------------------
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b); // Sorted Array
//     let answer = [];
    
//     if (nums.length < 3) {
//         return answer;
//     }
    
//     if (nums[0] > 0) {
//         return answer;
//     }
    
//     let hashMap = new Map();
    
//     for (let i = 0; i < nums.length; ++i) {
//         hashMap.set(nums[i], i);
//     }
    
//     for (let i = 0; i < nums.length - 2; ++i) {
//         if (nums[i] > 0) {
//             break;
//         }
        
//         for (let j = i + 1; j < nums.length - 1; ++j) {
//             let required = -1 * (nums[i] + nums[j]);
//             if (hashMap.has(required) && hashMap.get(required) > j) {
//                 answer.push([nums[i], nums[j], required]);
//             }
//             j = hashMap.get(nums[j]);
//         }
        
//         i = hashMap.get(nums[i]);
//     }
    
//     return answer;
// };

// let nums = [-1,0,-4,1,2,-1];
let nums = [-2,0,0,2,2];

console.log(threeSum(nums))