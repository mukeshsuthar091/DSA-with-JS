//---------------- Using Hash Table ----------------

var majorityElement = function(nums) {
    let map = new Map();
    let n = nums.length;

    for(let i=0; i<n; i++){
        count=0
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1);
        }
    }

    let majority = 0;

    for(let [k,v] of map){
        if(v > n/2){
            majority = k;
        }
    }  
    return majority;
};


//---------------- Moore's Voting Algorithm ----------------
var majorityElement = function(nums) {
    let maj_index=0, count=1;

    for(let i=1; i<nums.length; i++){
        if(nums[maj_index] !== nums[i]){
            count = count-1;
            if(count==0){
                maj_index = i;
                count = count+1;
            }
        }
        else{
            count = count+1;
        }
    }

    return nums[maj_index];
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))