// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

var characterReplacement = function(s, k) {
    
    // 1.Two pointers l and r => slideing window (start at 0)
    // 2. We calculate the most common occurence of each letter in the window
    // 3. window length - most common <= k if so we have enough replacements to fill the wondow 
    // 4. add that lenght to out nax variable
    // 5. if not move the left pointer up  
    // 6. return max

};


const s = "ABAB"
const k = 2
// answer 4 => Explanation: Replace the two 'A's with two 'B's or vice versa.
console.log(characterReplacement(s,k))