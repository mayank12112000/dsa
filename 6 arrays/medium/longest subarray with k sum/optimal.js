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

 const k = 3; 
 const arr = [1,2,3,1,1,1,4,2,3]

const longestSubArray =(arr,k)=>{
    let max = 0
    let left = 0
    let right = 0
    let sum = arr[left]
    if(sum === k){
        max = 1
    }
    while(right < arr.length){
        while(left <= right && sum > k){
            sum -= arr[left]
            left++;
        }
        if(sum === k){
            max = Math.max(max, right-left+1)
        }
        right++;
        if(right <arr.length)sum += arr[right]
    }
    return max
}
console.log(longestSubArray(arr,k))