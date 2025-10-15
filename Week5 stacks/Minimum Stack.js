class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let top = this.minStack.length - 1
        this.stack.push(val)
        
        if(this.minStack.length === 0){
            this.minStack.push(val)
        }else if(this.minStack[top] < val){
            this.minStack.push(this.minStack[top])
        }else{
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let top = this.minStack.length - 1
       return this.minStack[top]
    }
}