class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // determine upper and lower bound
        // define answer variable 
        // while lower is <= upper
        // calc mid
        // calc total time 
        // compare total time to h
        // if totalTime < h => res equals  the min between cur m  and res
        // upper === m - 1
        // else lower = m + 1

        let min = 1
        let max = Math.max(...piles)
        let res = max

        while(min <= max){
           let k = Math.floor((min + max) / 2)
           let total = piles.reduce((a,c) => {
            return a + Math.ceil(c / k)
           },0)
            
            if(total <= h){
                res = k
                max = k - 1
            }else{
                min = k + 1
            }
        }
        return res
    }
}
