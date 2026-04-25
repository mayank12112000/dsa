/*Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Example 2:
Input: prices = {1, 0, 1, 1, 0, 1} 
Output: 2
Explanation: There are two consecutive 1's in the array.*/

const maxConsecutiveOnes=(arr)=>{
    let max = 0
    let count = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]===1){
            count++
        }else{
            count =0
        }
        max = Math.max(count,max)
    }
    return Math.max(count,max)
}
let arr = [1, 1, 0,0, 1,1, 1, 1]
console.log(maxConsecutiveOnes(arr))