// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true


var isValid = function(s) {
    if(s[0] !== '(' && s[0] !== '{' && s[0] !== '['){
        return false
    }

    let arr = s.split('')

    let stack = []
    let hashMap = {
        '(':')',
        '[':']',
        '{':'}'
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '(' || arr[i] === '{' ||arr[i] === '[' ){
            stack.push(arr[i])
        }else{
            if(hashMap[stack.pop()] !== arr[i]){
                return false
            }
        }

    }

   return stack.length === 0
};


const x = "(())"
console.log(isValid(x))


