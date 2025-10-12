// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.



var calPoints = function(operations) {
    let res = []

    for(let i = 0; i < operations.length; i++){
        if(operations[i] === '+'){
            let sum = res[res.length - 1] + res[res.length - 2]
            res.push(sum)
        }else if(operations[i] === 'D'){
            let double = res[res.length - 1] * 2
            res.push(double)
        }else if(operations[i] === 'C'){
            res.pop()
        }else{
            res.push(Number(operations[i]))
        }
        
    }
    return res.reduce((a,b)=> a+b,0)
    // Time complexity => O(n)
    // Space complecity => O(n)

};

const x = ["5","-2","4","C","D","9","+","+"]
// 30
console.log(calPoints(x))