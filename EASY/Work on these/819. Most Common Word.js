// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"

var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[^A-Za-z]/g, ' ').toLowerCase()
    paragraph = paragraph.replace(/\s+/g, ' ').trim(); // Collapse multiple spaces and trim
    let count = {}
  
    let arr = paragraph.split(' ')
    
    for( let i = 0; i < arr.length; i++){ 
        let word = arr[i]
        if(!banned.includes(word)){
            count[word] = (count[word] || 0) + 1
        }
    }

    let maxKey = Object.entries(count).reduce((max, [key,value]) => {
        
        return count[max] >= value ? max : key
    },0)

    // Time complexity => O(n)
    // space complexity => o(n) 

    return maxKey
   
     
};


const x = "Bob hit a ball, the hit BALL flew far after it was hit."
const y = ["hit"]
console.log(mostCommonWord(x,y))