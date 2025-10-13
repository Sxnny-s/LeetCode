class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
   
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
    return stack[0]
    }
}