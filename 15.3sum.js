// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    let answer = []
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }

        let j = nums.length - 1
        let k = i + 1
        
        while(k < j){
            let sum = nums[i] + nums[k] + nums[j]
            if(sum < 0){
                k++
            }else if(sum > 0){
                j--
            }else{
                answer.push([nums[i],nums[k],nums[j]])
                k++
                j--
                while (nums[k] === nums[k - 1]) k++;
                while (nums[j] === nums[j + 1]) j--;
            }
        }

    }
    return answer
};

// Time Complexity => O(n^2)
// space Complexity => O(1)
const x = [-2,0,0,2,2]
console.log(threeSum(x))