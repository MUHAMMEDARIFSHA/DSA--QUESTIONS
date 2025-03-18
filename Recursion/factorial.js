// 5! = 5*4*3*2*1

function factorial(num){
    if(num<= 0){
        return 1
    }
    else{
        return num * factorial(num-1)
    }
}

console.log(factorial(120))