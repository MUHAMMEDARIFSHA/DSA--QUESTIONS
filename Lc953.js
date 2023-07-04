// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order
//  The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet,
//  return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

var isAlienSorted = function(words, order) {
    let x=0
    let output
    for(let i=0;i<words.length;i++){
        for(let j=x;j<order.length;j++){
            console.log(order[j] )
           if(words[i][0] === order[j]){
             x =j+1
             output = true
             break
              }
           else{
            output= false
           }
        }
    }
    return output
};
console.log(isAlienSorted(words = ["kuvp","q"], order = "ngxlkthsjuoqcpavbfdermiywz"));