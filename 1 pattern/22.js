/*
n=5
5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5
 */

let n = 5
const leastDistance = (i,j)=>{
    let left = j
    let top = i
    let right = 2*n-1-1-j
    let bottom = 2*n-1-1-i
    return Math.min(left,right,top,bottom)
}
for(let i =0;i<2*n-1;i++){
    let result = ""
    for(let j= 0;j<2*n-1;j++){
        result += n- leastDistance(i,j)
    }
    console.log(result)
}