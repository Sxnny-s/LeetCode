// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    for(let i = 0; i < nums.length; i++){
        let count = 0
        while(nums[i] === 1){
            count++
            i++
        }
        res = Math.max(count,res)
    }
    return res
    // Time complexity  => O(n)
    // space complexity => O(n)
};

const x = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(x))