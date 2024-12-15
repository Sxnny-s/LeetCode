// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]


function groupAnagrams(strs) {
        let answer = []
        for (let i = 0; i < strs.length; i++) {
            i
           let group = []
            strs.forEach((e,j) => {
             
                if(strs[i].split('').sort().join('') === e.split('').sort().join('')){
                    group.push(e)
                    strs.splice(1,j)
                }
                
                
            });
            answer.push(group)
        }
       return answer
}


const x = ["act","pots","tops","cat","stop","hat"]
console.log(groupAnagrams(x))