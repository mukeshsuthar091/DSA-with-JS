// Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let hashTable = {};

    for (let e of t) {
        if(e in hashTable){
            hashTable[e] += 1;
        }else{
            hashTable[e] = 1;
        }
    }

    for(let e of s){
        if(e in hashTable){
            hashTable[e]--;

            if(hashTable[e]==0){
                delete hashTable[e];
            }
        }
    }

    for(let e in hashTable){
        return e;
    }
};

console.log(findTheDifference("abcd","abcde"));
console.log(findTheDifference("a","aa"));
console.log(findTheDifference("aabc", "aabcc"));