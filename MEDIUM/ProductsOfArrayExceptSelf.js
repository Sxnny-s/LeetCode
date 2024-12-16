// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 

// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

function productExceptSelf(nums) {
    let answer = []

    let product = nums.reduce((a,c) => a*c)
    nums.forEach((e,i) => {
        if(e === 0){
            let arrCopy = nums.slice()
            arrCopy.splice(i,1)
            answer.push(arrCopy.reduce((acc,cur)=> acc*cur))
        }else{
            answer.push(product/e)
        }
    });

    return answer
}

const x = [-1,1,0,-3,3]
// Output: [48,24,12,8]
console.log(productExceptSelf(x))