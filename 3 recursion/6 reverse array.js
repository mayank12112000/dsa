/**
 Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements 

Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of element
 */

let n = 5
let arr = [5,4,3,2,1]
// bruteForce
const reverseArray = (n,arr)=>{
    let reverse = new Array()
    for(let i = 0;i<n;i++){
        reverse[i]=arr[n-i-1]
    }
    return reverse
}
// console.log(reverseArray(n,arr))

const swap=(arr,l,r)=>{
    let b = arr[l]
    arr[l] = arr[r]
    arr[r] = b
}
const recrussiveReverse = (arr,l,r)=>{
    if(l>=r) return arr
    swap(arr,l,r)
    return recrussiveReverse(arr,l+1,r-1)
}
console.log(recrussiveReverse(arr,0,n-1))