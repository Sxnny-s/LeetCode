// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

function isValidSudoku(board) {

    for(let i = 0; i < 9; i++){
        let row = []
        for(let j = 0; j < 9; j++){
            if(row.includes(board[i][j])){
                return false
            }
            if(board[i][j] !== '.'){
                row.push(board[i][j])
            }
        }
    }

    for(let i = 0; i < 9; i++){
        let column = []
        
        for(let j = 0; j < 9; j++){
            if(column.includes(board[j][i])){
                return false
            }
            if(board[j][i] !== '.'){
                column.push(board[j][i])
            }
        }
    }


    for(let row = 0; row < 9; row += 3){
     
        for(let column = 0; column < 9; column += 3){
           let grid3x3 = []
        
        for(let i = 0; i < 3; i++){
            
            for(let j = 0; j < 3; j++){
                let cell = board[row + i][column + j]
                if(grid3x3.includes(cell)){
                    return false
                    
                }
                if(cell !== '.'){
                    grid3x3.push(cell)
                }
            }
        }
       }
    }

    return true
}

// Time complexity => O(9x3) or O(1) => becasue we are looping through every cell on the board 3 times to chekc rows colums and subgrids
// space complexity  O(1) => because the cells are constant the space we take up will be constant


const x = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
// answer true
console.log(isValidSudoku(x))





























// function hasDuplicates(arr) {
//     let seen = []
//     for (let i = 0; i < arr.length; i++) {
//         if (item === ".") continue
//         if (seen.includes(item)) return true
//         seen.push(item)
//     }
//     return false
// }

// function isValidSudoku(board) {
//     for (i = 0; i < 9; i++) {
//         if (
//             // Row check
//             hasDuplicates(board[i]) || 
//             // Column check
//             hasDuplicates(board.map(row => row[i])) || 
//             // Square check
//             hasDuplicates(board.slice(3 * Math.floor(i / 3), 3 * Math.floor(i / 3) + 3).map(row => row.slice(3 * (i % 3), 3 * (i % 3) + 3)))) {
//             return false
//         }
//         return true
//     }
// }
