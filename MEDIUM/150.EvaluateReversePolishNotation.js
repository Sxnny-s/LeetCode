// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5


function evalRPN(tokens) {
    tokens
    // init stack
    // for loop to loop through every element in out stack
    // add to our stack until we get a operator
    // once we hit an operator reduce the stack with that operator
    // continue until we have looped through every element 
    let stack = []
    answer = 0
    for(let i = 0 ; i < tokens.length; i++){
        
        let token = tokens[i]
        if(token !== '+' && token !== '-' && token !== '*' && token !== '/'){
            stack.push(token) 
        }else if(token === '+'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Number(a) + Number(b))
        }else if(token === '-'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Number(b) - Number(a))
        }else if(token === '*'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Number(a) * Number(b))
        }else{
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Math.trunc(Number(b) / Number(a)))
        }
    }
    return stack
    
}
// Time complexity => O(n)
// space complexity => O(n) 
const x = ["10"]
// Output: 5 

console.log(evalRPN(x))