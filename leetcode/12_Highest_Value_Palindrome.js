// function highestValuePalindrome(s, n, k) {
//     // Write your code here
//     s = s.split("");
//     // console.log(s)
//     let mark = new Array(n).fill(0);

//     let l=0;
//     let r=n-1;

//     while(l<=r){
//         if(s[l] != s[r]){
//             if(s[l] > s[r]){
//                 s[r] = s[l]
//                 mark[r] = 1;
//             }
//             else{
//                 s[l] = s[r];
//                 mark[l] = 1;
//             }

//             k-=1;
//         }
//         l++;
//         r--;
//     }

//     if(k<0){
//         return -1;
//     }

//     l=0;
//     r=n-1;
//     while(l<=r){
//         if(l==r && k>=1){
//             s[l] = '9';
//             break;
//         }

//         if(s[l]<'9'){
//             if(mark[l] == 0 && mark[r] == 0 && k>=2){
//                 s[l] = s[r] = '9';
//                 k -= 2;
//             }

//             if((mark[l] == 1 || mark[r] == 1) && k>=1){
//                 s[l] = s[r] = '9';
//                 k-=1;
//             }
//         }
//         l++;
//         r--;
//     }

//     return s.join("");
// }

// ------------------------------------------------------------------------------------

function highestValuePalindrome(s, n, k) {
    let diffCount = 0; // Count of different characters from the original string
    const changes = Array(n).fill(false); // Track changes made to each character

    // Count differences from the original string
    for (let i = 0, j=n-1; i < j; i++, j--) {
        // console.log(s.charAt(i),s.charAt(n-1-i))
        if (s.charAt(i) !== s.charAt(n - 1 - i)) {
            diffCount++;
        }
    }

    // If the number of allowed changes is less than the differences,
    // we cannot form a palindrome string.
    if (diffCount > k) {
        return "-1";
    }

    // Greedily change the characters to form the highest value palindrome
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
            // We have a difference, need to decide which character to change.
            let maxChar = Math.max(s.charAt(i), s.charAt(j));
            if (maxChar !== '9' && k - diffCount >= 1) {
                // console.log(maxChar !== '9' && k - diffCount >= 1)
                // We can change one of the characters to '9'
                s = s.substring(0, i) + '9' + s.substring(i + 1, j) + '9' + s.substring(j + 1);
                changes[i] = true;
                changes[j] = true;
                k--; // Reduce the number of available changes
                diffCount--; // One difference resolved
            } else {
                // Change both characters to the maximum of the two
                s = s.substring(0, i) + maxChar + s.substring(i + 1, j) + maxChar + s.substring(j + 1);
                changes[i] = true;
                changes[j] = true;
            }
        } else {
            // No difference, check if we can make both characters '9'
            if (s.charAt(i) !== '9' && k - diffCount >= 2 && !changes[i]) {
                s = s.substring(0, i) + '9' + s.substring(i + 1, j) + '9' + s.substring(j + 1);
                k -= 2; // Reduce the number of available changes
            }
        }
    }

    // Handle the middle character if the string length is odd
    if (n % 2 !== 0 && k > 0) {
        s = s.substring(0, Math.floor(n / 2)) + '9' + s.substring(Math.floor(n / 2) + 1);
    }

    return s;
}


// ------------------------------------------------------------------------------------

// console.log(highestValuePalindrome("092282", 6, 3));
// console.log(highestValuePalindrome("0925282", 7, 3));
// console.log(highestValuePalindrome("0011", 4, 1));
// console.log(highestValuePalindrome("12321", 5, 1));
// console.log(highestValuePalindrome("1231", 4, 3));
// console.log(highestValuePalindrome("9231", 4, 2));
console.log(highestValuePalindrome("932239", 6, 2));