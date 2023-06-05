// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

 

// Example 1:



// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 


// var distanceBetweenBusStops = function(distance, start, destination) {
//     let dis1 =0
//     let dis2 = 0
//     while(start !== destination || start > 0){
//         console.log(start)
//         dis1 = dis1 + distance[start]
//         start--
//     }
//     while(start !== destination || start<distance.lenght ){
//         dis2 = dis2 +distance[start]
//     }
//     if(dis1 >dis2){
//         return dis2
//     }
//     else{
//         return dis1
//     }
// };
// var distanceBetweenBusStops = function(distance, start, destination) {
//     let dis1 = 0;
//     let dis2 = 0;
//     let a = start
//     let b = start
  
//     while (a !== destination && a >=0) {
//        dis1 +=distance[a];
//       a--;
//      }
//     //  console.log(dis1 +" dis1")
//     while (b !== destination && b < distance.length) {
//         ;
//       dis2 = dis2 + distance[b];
//     //   console.log(dis2 +" dis2")
//       b++;
//       }
//     // console.log(dis2 +" dis2")
//     if(dis1 >dis2){
//         return dis2
//     }
//     else{
//        return dis1
//     }
    
//   };
  

// console.log(distanceBetweenBusStops([1,2,3,4], start = 0, destination = 1))
// console.log(distanceBetweenBusStops([1,2,3,4], start = 0, destination = 2))
// console.log(distanceBetweenBusStops([1,2,3,4], start = 0, destination = 3))
// console.log(distanceBetweenBusStops([3,6,7,2,9,10,7,16,11], start = 6, destination = 2))