/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let container = 0;

    while(left < right){
        let minHeight = Math.min(height[left], height[right]);
        let containerWidth = right-left;
        let containerSpace = minHeight * containerWidth;

        container = Math.max(container, containerSpace);

        if(height[left] <= height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return container;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,2,1]))