/*Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
*/
 const arr = [3,1,3,4,2]

const duplicate=(arr)=>{
    const n = arr.length
    let freq = new Array(n).fill(0)

    for(let i = 0;i<n;i++){
        if(freq[arr[i]]===0){
            freq[arr[i]]+=1
        }else{
            return arr[i]
        }
    }
    return 0
}

console.log(duplicate(arr))