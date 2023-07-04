//  input [1,1,1,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,7,2,3,3,]
// output [1,2,3,4,5,6,7,2,3]

function unique(arr){
    let newArr = []
    let  x = arr[0]
    newArr.push(x)
for(let i=1;i<arr.length;i++){
    if(arr[i]!==x){
        x = arr[i]
        newArr.push(x)
    }
}
return newArr
}

console.log(unique([1,1,1,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,7,2,3,3,]))