// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// brute force
var minEatingSpeed = function(piles, h) {
    // Possible range of k is 1 - Max(piles)
    // for loop from 1 - Max(piles)
    // its takes Math.celi(piles[i]/k) => store this in a total time variable store k
    // if if any total times is less and the current one will update the variables 
    let k = 0 

    for(let i = 1; i <= Math.max(...piles);i++){
        i
        let time = 0
        for(let j = 0; j < piles.length; j++){
           time += Math.ceil(piles[j]/i)
        }
        if(time <= h){
            shortestTime = time
            k = i
            break
        }
    }
   return k
};


var minEatingSpeed1 = function(piles, h) {
    // Possible range of k is 1 - Max(piles)
    // for loop from 1 - Max(piles)
    // its takes Math.celi(piles[i]/k) => store this in a total time variable store k
    // if if any total times is less and the current one will update the variables 
    let k = 0 
    let possibleK = []
    for(let i = 1; i <= Math.max(...piles);i++){
        possibleK.push(i)
    }

    let l = 0
    let r = possibleK.length - 1

    possibleK
    while(l<=r){
        let mid = Math.floor((l+r) / 2)
        let timeToEat = piles.reduce((acc,cur) => {
            
            return acc + Math.ceil(cur/possibleK[mid])
        },0)
        console.log(timeToEat)
        l++
    }


    

};

const x = [3,6,7,11]
const y = 8
// answer => 4
console.log(minEatingSpeed1(x,y))