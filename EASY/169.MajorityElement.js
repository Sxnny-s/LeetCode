// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let target = nums.length / 2
    const hm = {}
    for (let i = 0; i < nums.length; i++) {
      hm[nums[i]] = (hm[nums[i]] || 0) + 1 

    }
    hm    
    for(count in hm){
        if(hm[count] > target){
           return Number(count)
        }
    }
    // Time complexity => O(n)
    // Space complexity => O(n)
};

const x = [2,2,1,1,1,2,2]
console.log(majorityElement(x))