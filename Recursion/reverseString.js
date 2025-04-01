// reverse a string using recursion

// function reverseString(str) {
//     if (str === "") {
//         return ""
//     }
//     else {
//         return reverseString(str)
//     }
// }



function reverseString_1(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}


console.log(reverseString("hello"))