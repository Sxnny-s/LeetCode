// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


var singleNumber = function(nums) {

    return nums.reduce((acc,cur) => acc ^ cur, 0 )
 };

const x = [4,1,2,1,2]
 console.log(singleNumber(x))

//  Time complexity => O(n) => We are looping through each element once.
// Space complexity => O(1) => We are not creating any new data structors. We are interating through our initial array and preforming operations on eash of the elements  