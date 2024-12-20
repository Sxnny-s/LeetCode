// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 
var longestConsecutive = function(nums) {
    let count = 1
    let countlist = []
    if(nums.length == 0){
        return 0
    }

    let sortedNums = nums.sort((a,b) => a - b)
    let sortedSet = new Set(sortedNums) 
  
    let array = [...sortedSet]
    
    array.forEach((e,i,arr) => {
        if((e + 1) === arr[i + 1]){
            count++
        }else{
            countlist.push(count)
            count = 1
        } 
    })
    return Math.max(...countlist)
};

// Time complexity => O(nlogn) => because sorting is the bottle neck of out algorthim 
// Space Complexity => O(n) => because the longer the input array the larger our data structors will be 


var longestConsecutive1 = function(nums) {
    let maxList = []
    let maxCount = 1
    let hashSet = new Set(nums)
    let uniqueArray = [...hashSet]
    
    if(nums.length == 0){
        return 0
    }
   
    uniqueArray
    
    for (let i = 0; i < uniqueArray.length; i++) {
        if(!hashSet.has(uniqueArray[i] - 1)){
            i
            let currentNum = uniqueArray[i]
            while(hashSet.has(currentNum + 1)){
                maxCount++
                currentNum++
            }
            maxList.push(maxCount)
            maxCount = 1
        }  
    }
    maxList
    return Math.max(...maxList)

    // time complexity => O(n) => because for each element in nums we do same amount of operations 1. creating hasSet form array O(n) 2.looping though each number in the array. checking a hashset takes O(1) time so our overall time is O(n)  
    // space complexity => 0(n) => because we create maxList array and a hashset form that array. The memory is dependedent on the length of the intial arary 
    
};

const x = [9,1,4,7,3,-1,0,5,8,-1,6]
console.log(longestConsecutive1(x))