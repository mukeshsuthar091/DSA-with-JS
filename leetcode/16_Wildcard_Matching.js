/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

    // Base case: empty pattern matches empty string
    dp[0][0] = true;

    // Handling patterns that start with '*'
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // If characters match or '?' is encountered
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "*"));
// console.log(isMatch("cb", "?a"));
// console.log(isMatch("cbbda", "cbb*a"));
console.log(isMatch("adceb", "*a*b"));