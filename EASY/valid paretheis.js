class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // is the first char is closing return false
        // init a stack
        // add all the opening to the stack
        // if we see a closing check if it matches the top of the stack
        // if it doesnt return false
        // if stack len === 0 return true else false

       if ([")", "]", "}"].includes(s[0])) {
            return false
        }

        let stack = []
        let hm = {
            ')':'(',
            '}':'{',
            ']':'[',
        }
        for(let i = 0; i < s.length; i++){
            if(["(", "[", "{"].includes(s[i])){
                stack.push(s[i])
            }else{
                if(stack.pop() !== hm[s[i]]){
                    return false
                }
            }
        } 
        return stack.length === 0
        
    }
}