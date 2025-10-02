



function swap(num){
    // string => array
    // iterate form the end of the array 
    // check if nums[i] and nums[i + 1] have the same parity (and check if it is nums.length - 1) dont i--
    // if so check if nums[i] < nums[i + 1]  i--
    // swap if the above is true 
    // return nums as a string
    let arr = num.split('')
    let i = arr.length - 1
    arr
    while(i > 0){
        let even1 = arr[i] % 2 == 0
        let even2 = arr[i - 1] % 2 == 0
        let odd1 = arr[i] % 2 != 0
        let odd2 = arr[i - 1] % 2 != 0
        
        if(even1 && even2 || odd1 && odd2){
            if(arr[i] > arr[i - 1]){
                console.log(arr[i], arr[i - 1]);
                [arr[i], arr[i - 1]] = [arr[i - 1] , arr[i]]
                if(i != arr.length - 1){
                    i++
                    continue
                }
            }
        }
        
        i--
        
    }

    
   return arr

}

console.log(swap('0082663'))
// answer '8662003'