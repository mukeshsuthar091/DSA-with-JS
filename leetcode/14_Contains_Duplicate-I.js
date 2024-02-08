/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashTable = {};

    for(let e of nums){
        if(e in hashTable){
            hashTable[e] += 1;
        }
        else{
            hashTable[e] = 1;
        }
    }  

    for(let e in hashTable){
        if(hashTable[e]>1){
            return true;
        }
    } 
    return false;
};