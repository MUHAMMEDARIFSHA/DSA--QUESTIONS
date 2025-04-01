//  5 => 
// F(n) = F(n-1)+F(n-2)
// find the fibonacci number and the nth position

function fibonacci(n){
    if(n <= 1){
        return n
    }
    else{
        return (fibonacci(n-1) + fibonacci(n-2))
    }
}
console.log(fibonacci(15))