/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let matching = true;
    let count = 0;

    for(let i = 0; i<p.length; i++){
        if(p[i]=='*'){
            count++;
        }
    }
    console.log(count)
    if(count>1){
        return false;
    }
    else if(count==1){
        return true;
    }
    
    for(let i=0; i<s.length; i++){
        if(s[i]!==p[i] && p[i]!== "?"){
            matching = false;
        }
    }

    return matching;
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "*"));
// console.log(isMatch("cb", "?a"));
console.log(isMatch("cbbda", "cbb*a"));