// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function(s) {
   
    let max = 0
    let r = 0
    for(let i = 1 ; i < s.length ;i++){
        let subString = []
        while(!subString.includes(s[r]) && s[r]){
            subString.push(s[r])
            r++
        }
        r = i
        subString
       if(subString.length > max) max = subString.length
    }
    return max
};
// Time complexity is O(n^2)


var lengthOfLongestSubstring1 = function(s) {
    let long = 0
    let l = 0
    let unique = new Set()

    for (let r = 0; r < s.length; r++){
       
        while(unique.has(s[r])){
            unique.delete(s[l])
            l++
        }
        unique.add(s[r])
        long = Math.max(long, unique.size)
    }
    return long
    
};






const x = "aaaaaaaaaab"
// answer => 1 = vdf
console.log(lengthOfLongestSubstring1(x))