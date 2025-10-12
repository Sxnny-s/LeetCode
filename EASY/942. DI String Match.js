// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

// Example 1:

// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]
// Example 3:

// Input: s = "DDI"
// Output: [3,2,0,1]
 
var diStringMatch = function(s) {
    let size = s.length + 1
    let nums = []
    let res = []
    
    for (let i = 0; i < size; i++){
        nums.push(i)
    }
    let r = nums.length - 1
    let l = 0

    for(let i = 0; i < s.length + 1; i++){
        if(s[i] === 'I'){
            res.push(nums[l])
            l++
        }else{
            res.push(nums[r])
            r--
        }
    }
    return res
};
// Time complexity => O(2n) => O(n)
// space complexity O(n)

const x = "IDID"
console.log(diStringMatch(x))


console.log(10 ** 4)