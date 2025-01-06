// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]



var maxSlidingWindow = function(nums, k) {
    nums
    // 1. l = 0 r = k max = 0 answer = []
    // 2. while our r pointer is < len of nums
    // 3. calc sum. push sum answer
    // 4. l and r ++  
    // 5.current - l && current + r
    // return answer

    let answer = []
    let l = 0
    let r = k
   
    for(let i = k - 1; i < nums.length;i++){
        let sect = nums.slice(l,k)
        answer.push(Math.max(...sect))
        k++
        l++
    }   

    answer

}

const x = [3,1,2,-3,5,3,6,7]
// [3,3,5,5,6,7]
const y = 3
console.log(maxSlidingWindow(x,y))