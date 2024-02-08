/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let n = height.length;
    let left = new Array(n-1).fill(0);
    let right = new Array(n-1).fill(0);
    
    left[0] = height[0];
    for(let i=1; i<n; i++){
        left[i] = Math.max(left[i-1], height[i]);
    }

    right[n-1] = height[n-1];
    for(let i=n-2; i>=0; i--){
        right[i] = Math.max(right[i+1], height[i]);
    }
    // console.log(left, right, n)
    let count = 0;
    for(let i=0; i<n; i++){
        count += Math.min(left[i], right[i])-height[i];
    }

    return count;
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// let height = [3,1,2,4,0,1,3,2];

console.log(trap(height));