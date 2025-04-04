// check a number is pallindrome or not
// 121 ==>true
// 124 ==>false


function pallindrome(num, start =0,end = String(num).length -1){
    let string = String(num)    
    if(start > end) return true
    if(string[start] != string[end]) return false
    return pallindrome(num,start+1,end-1)

}

console.log(pallindrome(121))