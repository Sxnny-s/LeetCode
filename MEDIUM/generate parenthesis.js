class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        let res = []
        function back(stack,inner,outer){
            if(inner === n && outer === n) res.push(stack.join(''))

            if(inner < n) {
                stack.push('(')
                back(stack,inner + 1, outer)
                stack.pop()
            }

            if(outer < n && outer < inner){
                stack.push(')')
                back(stack,inner, outer + 1)
                stack.pop()
            }
        }

        back([],0,0)

        return res
    }
}
