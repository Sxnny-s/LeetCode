// You are given an m x n integer matrix matrix with the following two properties:

//     Each row is sorted in non-decreasing order.
//     The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// faltening the array 
var searchMatrix = function(matrix, target) {
    let flatArr = matrix.flat()
    let l = 0
    let r = flatArr.length - 1

    while(l<=r){
        let mid = Math.floor((l+r) / 2)
        if(target < flatArr[mid]){
            r = mid - 1
        }else if(target > flatArr[mid]){
            l = mid + 1
        }else{
            return true
        }
    }
    return false
};

var searchMatrix1 = function(matrix, target) {
    matrix
    // l pointer first element of the first array
    // R pointer last element of the last array 
    // While(l<=R)
    // find mid array in matrix (l+R) / 2 floor
    // if target < mid[0] r = mid - 1
    // if target > mid[mid.length - 1] => l = mid + 1
    // else => return target 

    let l = 0
    let r = matrix.length - 1
<<<<<<< HEAD

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
=======
    
    


    
>>>>>>> 007401eb652581a1526cc52887dbf16533f08429
};

const x = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]


const y = 60

console.log(searchMatrix1(x,y))


