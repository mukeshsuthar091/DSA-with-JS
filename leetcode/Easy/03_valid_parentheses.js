/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     while(true){
//         let originalLength = s.length;

//         if(s.includes("()")){ s=s.replace("()", "") }
//         if(s.includes("[]")){ s=s.replace("[]", "") }
//         if(s.includes("{}")){ s=s.replace("{}", "") }

//         let finalLength = s.length;

//         if(originalLength === finalLength){
//             break;
//         }
//     }  

//     return s.length==0 ? true : false;
// };


var isValid = function(s) {
    let stack = [];

    for(let ele of s){

        if(ele==="[") { stack.push(ele); continue;}
        if(ele==="(") { stack.push(ele); continue;}
        if(ele==="{") { stack.push(ele); continue;}

        let x = stack.pop();

        if(x==="[" && ele!=="]"){ return false; }
        if(x==="{" && ele!=="}"){ return false; }
        if(x==="(" && ele!==")"){ return false; }
    }

    return true;
};

console.log(isValid("()[]{}"))
console.log(isValid("()"))
console.log(isValid("(]"))