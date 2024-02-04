function legoBlocks(n, m) {
    const MOD = 1000000007;

    // Step 1: O(W)
    // The number of combinations to build a single row
    // As only four kinds of sizes, so
    // base case:
    // if width is 0, combination is 1
    // if width is 1, combination is 1
    // if width is 2, combination is 2
    // if width is 3, combination is 4
    let row_combinations = [1, 1, 2, 4];

    // Build row combinations up to current wall's width
    while (row_combinations.length <= m) {
        row_combinations.push(row_combinations.slice(-4).reduce((acc, val) => acc + val, 0) % MOD);
    }

    // Step 2: O(W)
    // Compute total combinations
    // for constructing a wall of height N of varying widths
    let total = row_combinations.map(c => BigInt(Math.pow(c, n)) % BigInt(MOD));

    // Step 3: O(W^2)
    // Find the number of unstable wall configurations
    // for a wall of height N of varying widths
    let unstable = [0, 0];

    // Divide the wall into left part and right part,
    // and calculate the combination of left part and right part.
    // From width is 2, we start to consider about violation.
    for (let i = 2; i <= m; i++) {
        let result = 0;
        for (let j = 1; j < i; j++) {
            result += (total[j] - unstable[j]) * total[i - j];
            result %= MOD;
        }
        unstable.push(result);
    }

    // Print the number of stable wall combinations
    return (total[m] - unstable[m] + MOD) % MOD;
}

// Test
console.log(legoBlocks(2, 2)); // Output should be 7
