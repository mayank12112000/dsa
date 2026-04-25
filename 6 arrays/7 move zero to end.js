/**
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
Input : 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation : All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
 */

const arr = [0,1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]

const zeroToEnd=(arr)=>{
    let n = arr.length
    if(n<2) return arr
    let j = -1
    // find first zero
    for(let i = 0;i<n;i++){
        if(arr[i]===0){
            j = i; 
            break;
        }
    }
    // if no zero found
    if(j===-1) return 

    for(let i = j+1;i<n;i++){
        if(arr[i]!==0 && arr[j]===0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j++
        }
    }
    return arr

}

console.log(zeroToEnd(arr))