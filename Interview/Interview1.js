//  input [1,1,1,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,7,2,3,3,]
// output [1,2,3,4,5,6,7,2,3]

// function unique(arr){
//     let newArr = []
//     let  x = arr[0]
//     newArr.push(x)
// for(let i=1;i<arr.length;i++){
//     if(arr[i]!==x){
//         x = arr[i]
//         newArr.push(x)
//     }
// }
// return newArr
// }

// console.log(unique([1,1,1,2,2,2,3,3,4,4,4,4,4,5,5,5,6,6,7,2,3,3,]))

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

 function arraySum (arr,target){
     let result = []
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<arr.length;j++){
           if(arr[i]+arr[j]=== target){
             result.push([i,j])
           }
        }
      return result



    // if(sum === target){
    //     let result =[]
    //     for(let j=0;j<=i;j++){
    //     result.push(j)
    //     }
    //     return result
    // }
    
    }
 }
//  console.log(arraySum([2,7,11,15,],9))



//  const a = { flag: 1, get toString() 
//     { return function () { return this.flag++; }; }, };

//      if (a == 1 && a == 2) { console.log("Test"); }


function AA(num){
    
    if(num <=5 ){
        return num
    }
    else{
        return "not a number equal to 1-5"
    }
//     if(a <= num){
//         return num
//     }
}