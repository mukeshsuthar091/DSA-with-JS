// function permutations(string) {
//     let results =[];

//     // Base case: if the string has only one character, return it as an array
//     if (string.length === 1) {
//         results.push(string);
//         return results;
//     }

//     // Iterate through each character of the string
//     for (let i = 0; i < string.length; i++) {
//         // Extract the current character
//         let char = string[i];

//         // Exclude the current character and get the remaining characters
//         let remainingChars = string.slice(0, i) + string.slice(i + 1);

//         // Generate permutations of the remaining characters
//         let innerPermutations = permutations(remainingChars);

//         // Concatenate the current character with each permutation of the remaining characters
//         for (let j = 0; j < innerPermutations.length; j++) {
//             results.push(char + innerPermutations[j]);
//         }
//     }

//     return results;
// }

// // Example usage:
// let inputString = "abc";
// let result = permutations(inputString);
// console.log(result);



var checkInclusion = function(s1, s2) {
    let map = new Map();
    for(let c of s1){
        if(!map.has(c)){
            map.set(c, 0);
        }
        map.set(c, map.get(c)+1)
    }

    let n = s1.length;
    let m = s2.length;

    for(let i=0; i<= m-n; i++){
        let temp = new Map(map);
        let j=0;
        for(j=i; j<i+n; j++){
            let c = s2[j];
            if(temp.has(c) && temp.get(c)>0){
                temp.set(c, temp.get(c)-1);
            }
            else{
                break;
            }
        }
        if(j == i+n) return true
    }

    return false;
};


console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));