// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]


var nextGreaterElements = function(nums) {
    let res = []
    if(nums.length === 1) res.push(-1)

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let j = (i + 1) % nums.length
        while(j !== i){
            if(nums[j] > num){
                res.push(nums[j]) 
                break;
            }
            j = (j + 1) % nums.length
            if(j === i) res.push(-1)
        }   
    }
    return res
};

// Time complexity => O(n^2)
// Spacce compleity => O(n)


var nextGreaterElements1 = function(nums) {
    
};


// const x = [1,2,1]
const x = [1] 
// [2,3,4,5,-1]
console.log(nextGreaterElements1(x))


