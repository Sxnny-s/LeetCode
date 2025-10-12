// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0;  i < nums.length;i++){

        for(let j = i + 1; j <= nums.length;j++){
            if(nums[i] === nums[j] && Math.abs(i - j) <= k){
                return true
            }
        }
    }
    return false
    // Time complexity => O(n * m)
    // Space complexity => O(1)
};


var containsNearbyDuplicate1 = function(nums, k) {
   
   
};


const x = [1,0,1,1]
const y = 1
console.log(containsNearbyDuplicate1(x,y))