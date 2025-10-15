class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let l = 0 
    let hm = {}
    let max = 0
    let maxOccur = 0
    for(let r = 0; r < s.length; r++){
        let char = s[r]
        hm[char] = (hm[char] || 0) + 1
        maxOccur = Math.max(maxOccur, hm[char]);
        // let maxOccur = Math.max(...Object.values(hm))
        // let wL = Object.values(hm).reduce((a,c)=> a+c, 0)
        let wL = r - l + 1
        if(wL - maxOccur <= k){
            max = Math.max(max,wL)
        
        }else{
            hm[s[l]]--
            l++
        }
    }
   return max

    }
}
