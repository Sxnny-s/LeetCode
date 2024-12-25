
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed, n) {
    let vadilPosition = 0
    flowerbed[0] === 0 && flowerbed[1] === 0 ? (flowerbed[0] = 1, vadilPosition++) : ''
    flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0 ? (flowerbed[flowerbed.length - 1] = 1, vadilPosition++) : ''
    flowerbed.length === 1 && flowerbed[0] === 0 ? vadilPosition++ : ''

    for(let i = 0; i < flowerbed.length;i++){
        flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 ? (vadilPosition++, flowerbed[i] = 1) : ''
        }
        return vadilPosition >= n

        // Time complexity => O(n) => because we are only looping through each element once
        // Space complexity  => O(1) => no new stuctors 
};

const x = [0]
const y = 1
// true
console.log(canPlaceFlowers(x,y))