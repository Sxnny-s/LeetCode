// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).



function compressed(x){
    let answer = ''

    for(let i = 0; i < x.length;i++){
        let count = 1
        answer += x[i]

        while(x[i] === x[i + 1]){
            i++
            count++
        }
        answer += count 
    }
   return answer.length < x.length ? answer : x
}


const x = 'aabcccccaaa'
//a2b1c5a3
console.log(compressed(x))