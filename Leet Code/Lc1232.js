// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
//  Check if these points make a straight line in the XY plane.

 



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

var checkStraightLine = function(coordinates) {

    let x1,x2 = coordinates[0]
    let y1,y2 = coordinates[i]
    const initialSlope = y2-y1/x2-x1

    for(let i=2 ;i<coordinates.length;i++){
        let x,y = coordinates[i]
        
        const slope = y-y1/x-x1
        if(slope != initialSlope){
            return false
        }
    }    
    return true
    
    
};

console.log(checkStraightLine( [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));

