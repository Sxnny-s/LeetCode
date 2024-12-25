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


const x = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
const y = 7

console.log(searchMatrix(x,y))


