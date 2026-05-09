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

const arr = [2, 0, 0, 3];
const k = 3;

const longestSubArray = (arr, k) => {
  let max = 0;
  let sum = 0
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if(!map.has(sum)){
        map.set(sum,i)
    }
    if(sum === k){
        max = i +1
    }

    if(map.has(sum-k) && (i-map.get(sum-k)) > max){
        max = i - map.get(sum-k)
    }
  }
  console.log(map)
  return max
};

console.log(longestSubArray(arr, k));
