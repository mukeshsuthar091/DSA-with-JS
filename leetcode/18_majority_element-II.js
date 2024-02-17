// ------------------ using HashTable ------------------
// var majorityElement = function(nums) {
//     let n = nums.length;
//     let map = new Map();
//     let i, maj_ele = [];
//     for(i=0; i<n; i++){
//         if(map.has(nums[i])){
//             map.set(nums[i], map.get(nums[i])+1);
//         }
//         else{
//             map.set(nums[i], 1);
//         }
//     }

//     for(let [k,v] of map){
//         if(v > Math.floor(n/3)){
//             maj_ele.push(k);
//         }
//         console.log(k,v)
//     }

//     console.log(maj_ele);
//     return;

// };


// ------------------ using(counting method) Boyer-Moore Majority Vote algorithm ------------------
var majorityElement = function(nums){
    let count1=0, count2=0;
    let candidate1 = null, candidate2 = null;

    for(let num of nums){
        if(candidate1===num){
            count1++;
        }
        else if(candidate2===num){
            count2++;
        }
        else if(count1===0){
            candidate1=num;
            count1 = 1;
        }
        else if(count2===0){
            candidate2 = num;
            count2 = 1;
        }
        else{
            count1--;
            count2--;
        }
    }

    count1=0;
    count2=0;

    for(let num of nums){
        if(num === candidate1){
            count1++;
        }
        else if(num === candidate2){
            count2++;
        }
    }

    let result = [];

    if(count1>(nums.length/3)){
        result.push(candidate1);
    }

    if(count2>(nums.length/3)){
        result.push(candidate2);
    }

    return result;
}


console.log(majorityElement([3,2,3]))