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
    // L pointer === 0
    // R pointer === nums.length - 1
    // While(L<=R) =>
    // mid === L+R/2 floor
    // is Target > mid => L === mid + 1
    // is target < mid => R === Mid - 1
    // else => return mid
    // return - 1

    let l = 0
    let r = nums.length - 1

    while(l<=r){
        let mid = Math.floor((l+r) / 2)

        if(target > nums[mid]){
            l = mid + 1
        }else if(target < nums[mid]){
            r = mid - 1
        }else {
            return mid
        }
    }
    return -1
    };
    
    
    const x = [-1,0,2,4,6,8]
    const y = 4
    console.log(search(x,y))
    // answer 4