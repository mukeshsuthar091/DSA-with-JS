var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let numSet = new Set(nums);
    let longestStreak = 0;
    
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([]))
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))