// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6

// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

var maximumProduct = function(nums) {
    let product1 = nums.sort((a,b)=> a-b).slice(-3).reduce((a,c)=> a*c)
    let product2 = nums[0] * nums[1] * nums[nums.length - 1]

    return Math.max(product1,product2)
    

     
};

const x = [-100,-98,-1,2,3,4]
console.log( maximumProduct(x))