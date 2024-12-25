// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.

var findContentChildren = function(g, s) {
    // let count = 0
    // let greedHm = {}
    // let sizeHm = {}
    // for(let i = 0; i < g.length; i++){
    //     greedHm[g[i]] = (greedHm[g[i]] || 0) + 1
    // }
    // for(let i = 0; i < s.length; i++){
    //     sizeHm[s[i]] = (sizeHm[s[i]] || 0) + 1
    // }
    // greedHm
    // sizeHm

    // for(key in greedHm){
    //     key
    //     if(sizeHm[key] !== undefined){
    //         sizeHm[key] - greedHm[key] === 0 ? count += greedHm[key] : sizeHm[key] < greedHm[key] ? count += sizeHm[key]  : count += greedHm[key]
    //     }
    // }
    // return count

     // Step 1: Sort the greed factors and cookie sizes
     g.sort((a, b) => a - b);
     s.sort((a, b) => a - b);
 
     // Step 2: Initialize pointers and count
     let i = 0; // pointer for greed factors
     let j = 0; // pointer for cookie sizes
     let count = 0;
 
     // Step 3: Use two pointers to assign cookies
     while (j < s.length) {
         if (s[j] >= g[i]) {
             // Cookie satisfies the child's greed factor
             count++;
             i++; // Move to the next child
         }
         j++; // Move to the next cookie (whether it was used or not)
     }
 
     return count;
};


const g = [1,2]
const s = [1,2,3]
console.log(findContentChildren(g,s))