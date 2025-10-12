// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// Time complexity => O(n)
// space complexity => O(1)


var strStr1 = function(haystack, needle) {
    
    for(let i = 0; i < haystack.length; i++){
        let letter = haystack[i]
        
        if(letter === needle[0]){
            let check = haystack.slice(i,i + 3)
            if(check === needle){
                return i
            }
        }
    }
    return -1
};
// time complexity => O(n * m) m being the needle length
// space complecity => O(n)

const x = "sadbutsad"
const y = "sad"
console.log(strStr1(x,y))
