class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let max = 0

        for(let r = 1; r <= prices.length; r++){
            let profit = prices[r] - prices[l]
            if(profit > max){
                max = profit
            }
            while(prices[r] < prices[l]){
                l++
            }
        }
        return max
    }
}
