/*Example 1:
Input:
 N = 6, array[] = {9, -3, 3, -1, 6, -5}  
 Result:
 5  
 Explanation:
 The following subarrays sum to zero:
 - {-3, 3}
 - {-1, 6, -5}
 - {-3, 3, -1, 6, -5}
 The length of the longest subarray with sum zero is 5.
 
 Example 2:
 Input:
 N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}  
Result:
8  
Explanation:
Subarrays with sum zero:
- {-2, 2}
- {-8, 1, 7}
- {-2, 2, -8, 1, 7}
- {6, -2, 2, -8, 1, 7, 4, -10}
The length of the longest subarray with sum zero is 8. */


let arr = [1]
let n = 1

const longestSubArray=(arr,n)=>{
    let max = 0
    for(let i = 0; i < arr.length; i++){
        let sum = arr[i]
        if(sum === n){
            max= arr[i]
        }
        for(let j = i+1; j< arr.length; j++){
            sum += arr[j]
            console.log(i,sum)
            if(sum === n && j-i+1 > max){
                max = j-i+1;
            }
        }
    }
    return max
}

console.log(longestSubArray(arr,n))