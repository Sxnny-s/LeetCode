// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Brute force
var maxProfit = function(prices) {
    let max = 0    
    for(let  i = 0; i < prices.length; i++){
        for(let  j = i + 1; j < prices.length; j++){            
            let profit =  prices[j] - prices[i] 
            max < profit ? max = profit : max
        };
    }
    return max
};
// Time complexity => O(n^2)
// Space complexity => O(1)


// Two pointer 
var maxProfit1 = function(prices) {
    let max = 0
    let r = 1
    let l = 0

    while(r < prices.length){
        let profit = prices[r] - prices[l]
        profit > max ? max = profit : max
       
        if(prices[l] > prices[r]){
            l++
        }else if(prices[l] <= prices[r]){
            r++
        }
    }
    return max
};

// Time coplexity => O(n)
// space  Complexity  => O(1)

const x = [7,1,5,3,6,4]
console.log(maxProfit1(x))