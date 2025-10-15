class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=> a - b)
        let answer = []

        for(let i = 0; i < nums.length; i++){

            if(i > 0 && nums[i] === nums[i - 1]){
                continue
            }

            let j = nums.length - 1
            let k = i + 1

            while(k < j){
                let sum = nums[i] + nums[k] + nums[j]
                if(sum < 0){
                    k++
                }else if(sum > 0){
                    j--
                }else{
                    answer.push([nums[i],nums[k],nums[j]])
                    j--
                    k++
                    while(nums[j] === nums[j + 1]){
                        j--
                    } 
                    while(nums[k] === nums[k - 1]){
                        k++
                    }
                }
            }
        }
        return answer
    }
}
