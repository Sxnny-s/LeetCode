// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1
 

var nextGreaterElement = function(n) {

    let nArr = n.toString().split('')
    
    
    let r = nArr.length - 1
    let l = nArr.length - 2
    
    while(r >= 0){
        
        let temp = Number(nArr.join(''))
        console.log(temp)
        if(temp <= n){ 
            [nArr[r],nArr[l]] = [nArr[l],nArr[r]]
            l--
            r--
        }else if(temp > n){
            return temp
        }
    }
    return -1
};


const x = 241 
// 241 => 214 => 
// 241 => 124 = 241 => 421
// 412
console.log(nextGreaterElement(x))

// 212 => 221

// 567 => 576 

// 978 =>  987

// 6498 => 6489 => 6849 