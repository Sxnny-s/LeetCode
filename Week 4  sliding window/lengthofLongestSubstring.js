class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0
    let r = 0
    for(let i = 0 ; i < s.length ;i++){
        let subString = []
        while(!subString.includes(s[r]) && s[r]){
            subString.push(s[r])
            r++
        }
        r = i
       if(subString.length > max) max = subString.length
    }
    return max
    }
}
