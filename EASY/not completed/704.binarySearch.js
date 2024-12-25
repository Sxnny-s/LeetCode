// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
// left pointer start of array
// right pointer end of the array 
// mid => (r - l / 2 floor)
// if(target < mid ) => move right pointer to mid - 1
// if (target > mid) => move left pointer to mid + 1
// if (target === mid ) => return target


let l
};


const x = [-1,0,3,5,9,12]
const y = 9
console.log(search(x,y))
// answer 4