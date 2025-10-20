class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0
    let r = matrix.length - 1

    while(l<=r){
        let mid = Math.floor((l+r) / 2)
        if(target < matrix[mid][0]){
            r = mid - 1
        }else if(target > matrix[mid][matrix[mid].length - 1]){
            l = mid + 1
        }else{
            // return matrix[mid]
              let one = 0
              let two = matrix[mid].length - 1
             while(one<=two){
            
                let m = Math.floor((one+two) / 2)
                if(target <  matrix[mid][m]){
                    two = m - 1
                }else if(target > matrix[mid][m]){
                    one = m + 1
                }else{
                    return true
                }
            }
            return false
        }
        
    }
    return false
    }
}
