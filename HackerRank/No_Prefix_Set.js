// let words = ['aab', 'defgab', 'abcde', 'aabcde', 'bbbbbbbbbb', 'jabjjjad']
// let words = ['ab','bc','cd'];
let words = ["aab","aac","aacghgh","aabghgh"];
words.sort().reverse()
console.log(words)
// let badset = false;
// let badsetWord = ""

// for(let i=0; i<words.length; i++){
//     for(let j=i+1; j<words.length; j++){
//         if(words[j].includes(words[i])){
//             badset = true;
//             badsetWord = words[j];
//             break;
//         }
//     }
// }

// if(badset){
//     console.log("BAD SET")
//     console.log(badsetWord)
// }
// else{
//     console.log("GOOD SET");
// }


function noPrefix(words) {
    // Write your code here
    
    if(words == null && words.length < 2){
        console.log("GOOD SET");
        return
    }
    
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words.length; j++){
            if(i!=j && words[j].includes(words[i])){
                console.log("BAD SET");
                console.log(words[j]);
                return;
            }
        }
    }

    console.log("GOOD SET");
    

}

noPrefix(words)



