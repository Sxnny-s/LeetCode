// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

var sortArrayByParityII = function(nums) {
    let l = 0
    for(let l = 0; l < nums.length;l++){
        let r = l
        if(l % 2 === 0 && nums[l] % 2 !== 0){
            while(nums[r] % 2 !== 0){
                r++
            }
            [nums[l],nums[r]] = [nums[r],nums[l]]
        }else if(l % 2 !== 0 && nums[l] % 2 === 0){
            while(nums[r] % 2 === 0){
                r++
            }
            [nums[l],nums[r]] = [nums[r],nums[l]]
        }
    }

    // Time complexity => O(n^2)
    // space comlexity => O(1)

    return nums
}



const x = [648,831,560,986,192,424,997,829,897,843]
// [648,831,560,997,192,897,986,829,424,843]
console.log(sortArrayByParityII(x))









