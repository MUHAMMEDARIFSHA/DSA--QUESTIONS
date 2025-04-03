// create an array using recursion with given range of numbers 


function rangeOfNumber(startRange, endRange){
    if(startRange > endRange){
        return []
    }
    else{ 
        let numbers = rangeOfNumber(startRange+1,endRange)
        numbers.unshift(startRange)
        return numbers
    }
    
}

console.log(rangeOfNumber(1,4))