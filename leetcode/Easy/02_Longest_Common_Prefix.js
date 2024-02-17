/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";

    strs.sort();

    if(strs.length===1){
        return strs[0];
    }

    if(strs.length===0){
        return strs[0];
    }

    let first = strs[0];
    let last = strs[strs.length-1]
    // console.log(strs, first, last);

    for(let i=0; i<first.length; i++){
        if(first[i]!==last[i]){
            break;
        }
        result+=first[i];
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["d"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix(["aaa","aa", "aaaa"]));

