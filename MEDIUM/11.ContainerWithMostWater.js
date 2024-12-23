// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


var maxArea = function(height) {
    let max = 0

    for (let i = 0; i < height.length; i++){
        let min;
        for (let j = 0; j < height.length; j++){
           
            if(height[i] < height[j]){
                min = height[i]
            }else{
                min = height[j]
            }
            let possibleMax = min * j - (i * min)
            possibleMax > max ? max = possibleMax : max
        }
    }

   max

};


var maxArea1 = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1

    while(left < right){
        let min = Math.min(height[left],height[right])
        let area = min * (right - left)
        if(max < area){
            max = area
        }
        height[left] < height[right] ? left++ : right--
    }
    return max
};
// Time Complexity => O(n) => because we are only looping through each element once
// Space complexity => O(1) => The only space used is our max counter 


const x = [1,8,6,2,5,4,8,3,7]
// answer = 49
console.log(maxArea1(x))