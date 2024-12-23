// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function(numbers, target) {

    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target && j !== i){
                return [i + 1,j + 1]
            }
        }
    }

    // Time complexity O(n^2)
    // space complecity O(1)
};

// Two Pointer solution
var twoSum1 = function(numbers, target) {
   
   let j = numbers.length - 1
   

   for(let i = 0; i < numbers.length;){
        if(numbers[i] + numbers[j] > target){
            j--
        }else if(numbers[i] + numbers[j] < target){
            i++
        }else{
            return [i + 1,j + 1]
        }
    }
   // Time complexity O(n)
    // Space complexity O(1)    

};





const x = [0,0,3,4]
const y = 0
console.log(twoSum1(x,y))