var maxProfit = function(prices) {
    let max_profit = 0;

    // Time Complexity --- O(n^2);
    // for(let i=0; i<prices.length; i++){
    //     for(let j=i+1; j<prices.length; j++){
    //         if(prices[i]>prices[j]){
    //             continue;
    //         }
    //         profit = Math.max(max_profit, prices[j]-prices[i]);
    //     }
    // }
    // return max_profit;

    // -------------------------------------

    let left = 0;
    let right = 1;

    while(right<prices.length){
        if(prices[left]<prices[right]){
            let profit = prices[right] - prices[left];
            max_profit = Math.max(profit, max_profit);
        }
        else{
            left = right
        }
        right++;
    }
    return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,1,1,3,5,4]))
console.log(maxProfit([7,6,4,3,1]))