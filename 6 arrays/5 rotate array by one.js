/*Example 1:
Input:
 nums = [1, 2, 3, 4, 5]  
Output:
 [2, 3, 4, 5, 1]  
Explanation:
 Initially, nums = [1, 2, 3, 4, 5]  
Rotating once to the left results in nums = [2, 3, 4, 5, 1].

Example 2:
Input:
 nums = [-1, 0, 3, 6]  
Output:
 [0, 3, 6, -1]  
Explanation:
 Initially, nums = [-1, 0, 3, 6]  
Rotating once to the left results in nums = [0, 3, 6, -1]. */

let arr = [1, 2, 3, 4, 5]  

const rotateByOne =(arr)=>{
    let n = arr.length
    if(n<2) return arr
    let temp = arr[0]
    for(let i = 1;i<n;i++){
        arr[i-1] = arr[i]
    }
    arr[n-1] = temp
    return arr
}

console.log(rotateByOne(arr))