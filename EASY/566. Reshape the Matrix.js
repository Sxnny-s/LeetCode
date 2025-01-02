// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.


var matrixReshape = function(mat, r, c) {
    let matFlat = mat.flat()
    if((r * c) !== matFlat.length){
        return mat
    }
    let res = []
    for(let i = 0; i < matFlat.length; i += c){
       res.push(matFlat.slice(i, c + i))
    }
    return res

    // Time complexity => O(n)
    // Space complexity => O(n)
};



let a = [[1,2],[3,4]]
let b = 4
let c = 1
console.log(matrixReshape(a,b,c))