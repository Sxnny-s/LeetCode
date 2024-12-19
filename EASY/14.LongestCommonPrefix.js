// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

var longestCommonPrefix = function(strs) {
   let minLength = Math.min(...strs.map(e => e.length))
   let shortestWord = strs.filter(e => e.length === minLength )[0]
   let prefix = ''


   for (let i = 0; i < shortestWord.length; i++) {
    let check = shortestWord[i]
    if(strs.every(e => e[i] === check)){
        prefix += check
    }else{
        break
    }
   }
   return prefix

//    Time  complexity => O(n + l) l being the length of the shortest word
// space complexity => O(n)
    
};

const x = ["cir","car"]
console.log(longestCommonPrefix(x))