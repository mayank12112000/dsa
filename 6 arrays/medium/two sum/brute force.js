/*
Input: N = 5, arr[] = {2,6,5,8,11}, target = 14
Output : YES
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for first variant for second variant output will be : [1,3].

Input: N = 5, arr[] = {2,6,5,8,11}, target = 15
Output : NO.
Explanation: There exist no such two numbers whose sum is equal to the target.  */

const arr = [2,6,5,8,11]
const target = 19

const ifTwoSum = (arr,target)=>{
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return true
            }
        }
    }
    return false
}

const twoSumIndices=(arr,target)=>{
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
    return [-1,-1]
}
console.log(ifTwoSum(arr,target))
console.log(twoSumIndices(arr,target))