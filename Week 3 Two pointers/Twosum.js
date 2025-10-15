class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum = function(numbers, target) {

    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i + 1,j + 1]
            }
        }
    }

    // Time complexity O(n^2)
    // space complecity O(1)
};
}
