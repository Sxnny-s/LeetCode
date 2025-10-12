// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function(words) {
    // hash the first word and use that as a key
    // go through the list of words and hash each one
    // compare that hash to the key hash keep the ones that match discard the ones that dont
  
    let first = words[0]
    let key = {}
    for (let i = 0; i < first.length;i++){
        key[first[i]] = (key[first[i]] || 0) + 1
    }

    for (let i = 1; i < words.length; i++) {
        
        
    }

    key
    key
};


const x = ["bella","label","roller"]
console.log(commonChars(x))
// ["e","l","l"]