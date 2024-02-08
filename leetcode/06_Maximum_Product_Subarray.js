var maxProduct = function(nums) {
    let maxVal = -Infinity;
    let product = 1;
    let n = nums.length;

    for(let i=0; i<n; i++){
        product *= nums[i];
        maxVal = Math.max(maxVal, product);
        if(product==0){
            product = 1;
        }
    }

    product = 1;

    for(let i=n-1; i>=0; i--){
        product *= nums[i];
        maxVal = Math.max(maxVal, product);
        if(product==0){
            product = 1;
        }
    }
    
    return maxVal;
};

console.log(maxProduct([-3,-1,-1]));
console.log(maxProduct([0,2]));
console.log(maxProduct([3,-1,4]));
console.log(maxProduct([2,3,-2,4]));