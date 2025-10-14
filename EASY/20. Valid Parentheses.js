/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let arr = s.split('')
    let stack = []

    let hm = {
        ')':'(',
        ']':'[',
        '}':'{',
    }

    for(let i = 0; i < arr.length;i++){
        if(['[','{','('].includes(arr[i])){
            stack.push(arr[i])
        }else{
            let open = stack.pop()
            if(open !== hm[arr[i]]){
                return false
            }
        }
    }

    return stack.length === 0

};