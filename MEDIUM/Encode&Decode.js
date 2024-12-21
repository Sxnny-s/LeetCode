// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]

function encode(strs) {
return strs.map(e => e.length + `^${e}`)

}

function decode(strs) {
    return strs.map(e => e.replace(/\d+\^/, ''))
}

const x = ["we","say",":","yes","!@#$%^&*()"]
console.log(encode(x))
console.log(decode(encode(x)))