/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //input => arr => remove duplicates in order 
  //k = new Array.length 
 //output => array

    let k = 0
    let unqiueNums = new Set(nums)
    

    for(let num of unqiueNums){
        nums[k] = num
        k++
    }
    return k
    // Time complexity O(n + K)
    // Space complexity O(K)
};