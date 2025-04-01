// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    function isEmpty(){
        return stack.length ===0
    }
    for(let i = 0;i<s.length;i++){
        let char = s[i]
        if(s.length ===1){
            return false;
        }
        if(char == '(' || char == '{' || char == '['){
            stack.push(char)
        }
        else if(char == ')' || char == '}' || char == ']'){
            if(isEmpty()){
                return false
            }
            let top = stack.pop()
            if(top == '(' && char != ')' ||
                top == '{' && char != '}' || 
                top == '[' && char != ']' 
             ){
                return false
             }

        }
    }
    return stack.length ===0
    
};
console.log(isValid("(]"))