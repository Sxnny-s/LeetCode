// 567. Permutation in String
// Medium
// Topics
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a 
// permutation
//  of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

var checkInclusion = function(s1, s2) {

    
    for(let i = 0; i < s2.length; i++){
        i
        let perm = s2.slice(i,i + s1.length)
        perm
        let check = perm.split('').every((e) => s1.includes(e))
        if(check){
            return true 
        }
    }
    false
};

let x = "abc"
let y = "lecaabee"
console.log(checkInclusion(x,y))