// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]
// Example 3:

// Input: nums = [5,5], target = 10

// Output: [0,1]

function twoSum(nums, target) { 
    let hashmap = {}
    for (let i = 0; i < nums.length; i++) {
        hashmap[nums[i]] = i
    }
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(hashmap[diff] !== undefined && hashmap[diff] !== i){
            return [hashmap[diff], i]
        }
    }
}
// more optimal solution one pass
function twoSum1(nums, target) { 
    let hashmap = {}

    for (let i = 0; i < nums.length; i++) {
        let diff =  target - nums[i]
        if(hashmap[diff] === undefined){
            hashmap[nums[i]] = i
        }else{
            return [hashmap[diff],i]
        }
    }
}

// index of solution 
function twoSum3(nums, target) { 
    
    for (let i = 0; i < nums.length; i++) {
        let diff =  target - nums[i]
        let indexDiff = nums.indexOf(diff)
        if(indexDiff != -1 && indexDiff != i){
            return [i, indexDiff]
        }
    }
}


let x = [5,4,6]
let y = 10
console.log(twoSum3(x,y))