// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


var isAlienSorted = function(words, order) {
    let hm = {}
    for(let i = 1; i <= order.length ;i++){
        hm[order[i - 1]] = i
    }
    for(let i = 0; i < words.length - 1; i++){
        let l = 0
        if(hm[words[i][0]] > hm[words[i + 1][0]] ){
            return false 
        }
        if(hm[words[i][l]] === hm[words[i + 1][l]]){
            while(hm[words[i][l]] <= hm[words[i + 1][l]]){
                let shortest = Math.min(words[i].length,words[i + 1].length)
                if(l + 1 === shortest && hm[words[i][l]] === hm[words[i + 1][l]] && words[i].length !== shortest){
                    return false
                }
                l++ 
            }
        }
        if(hm[words[i][l]] > hm[words[i + 1][l]]){
            return false
        }
    }
    // time complexity => O(N * M) 
    // space complexity => O(n)

    return true
};

// const x = ["apple","app"]
// const y = "abcdefghijklmnopqrstuvwxyz"
// false


const x = ["apap","app"]
const y = "abcdefghijklmnopqrstuvwxyz"
console.log(isAlienSorted(x,y))