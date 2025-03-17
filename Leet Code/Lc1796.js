// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 


var secondHighest = function(s) {
    let arr = s.match(/\d+/g);
    if (arr === null || arr.length < 1) {
      return -1;
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
        for(let j=0;j<arr[i].length;j++){
  
      let num = parseInt(arr[i][j]);
  
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num<largest) {
        secondLargest = num;
      }
    }}
  
    if (secondLargest === -Infinity) {
      return -1;
    } else {
      return secondLargest;
    }
  };
  console.log(secondHighest(s = "dfa12321afd"));