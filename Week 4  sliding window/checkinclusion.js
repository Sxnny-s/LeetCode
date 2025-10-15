class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // 1.get len of s1
        // 2.l and r pointer l = 0 r = s1.len
        // 3. while loop through s2 and check if the sorted window is === s1
        // 4. if true => return true 
        // 5 else l++ r++
        // 6. if we exit the while loop return false

        
        s1 = s1.split('').sort()
        let l = 0
        let r = s1.length
        while(r <= s2.length){
            let temp = s2.slice(l,r).split('').sort()
            console.log(temp,s1)
            if(temp.join('') == s1.join('')){
                return true
            }
            l++
            r++
        }
        return false
    }
}
