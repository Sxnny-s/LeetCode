// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]

function topKFrequent(nums, k) {
    let numCount = {}
    nums.forEach(e => {
        numCount[e] = (numCount[e] || 0) + 1
    });
    numCount = Object.entries(numCount).sort((a,b) => a[1] - b[1])
    let orderedKeys = numCount.map(e => e[0])

    let answer = orderedKeys.slice(-k)
    return answer.map(e => +e) 
}

let x = [4,1,-1,2,-1,2,3]
let y = 2
console.log(topKFrequent(x,y))