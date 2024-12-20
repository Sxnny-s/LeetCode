// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    // first pointer => j
    let j = 0
    
    for (let i = 0; i < nums.length; i++) {
    // Second pointer => i
       if(nums[i] !== 0){
        // finding the first non zero element
        [nums[i],nums[j]] = [nums[j],nums[i]]
        // swapping the i pointers valse with the j pointers value 
        j++
        // incrementing j because this is the next position a non Zero value should go
       }  
    }
    return nums

    // Time complexity => O(n) => because we are able to solve the problem in one pass. so doing O(n) opperations
    // Space complexity => O(1) => because we are not creating any new data structors just moving the elements in place
};

const x = [0,1,0,3,12]
// answer = [1,3,12,0,0]
console.log(moveZeroes(x))