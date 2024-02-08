let s1 = "{[()]}";
let s2 = "{[(])}";
let s3 = "{{[[(())]]}}";

// function isBalanced(s) {
    
//     while (true) {
//         let originalLength = s.length;
        
//         s = s.replace("[]", "");
//         s = s.replace("{}", "");
//         s = s.replace("()", "");

//         let newLength = s.length;

//         if(newLength === originalLength){
//             break;
//         }
//     }

//     return s.length === 0 ? 'Yes' : 'No';
// }


// ---------- using stack -------------

function isBalanced(s){
    let stack = [];

    for(let x of s){

        if(x=="[" || x=="{" || x=="("){
            stack.push(x);
            continue
        }

        let poppedElement = stack.pop();

        if(x==="]" && poppedElement !== "["){
            return "No"
        }
        if(x==="}" && poppedElement !== "{"){
            return "No"
        }
        if(x===")" && poppedElement !== "("){
            return "No"
        }

    }

    return stack.length === 0 ? "Yes" : "No"

}

console.log(isBalanced(s1));
console.log(isBalanced(s2));
console.log(isBalanced(s3));


