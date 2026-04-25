/*Input: arr[]=[1,1,2,2,2,3,3]
Output: [1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.
Input: arr[]=[1,1,1,2,2,3,3,3,3,4,4]
Output: [1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array. */
const arr=[1,1,1,2,2,3,3,3,3,4,4]
// brute force
/*
const removeDuplicate = (arr)=>{
    let index= 0
    let seen = new Set()

    for(let num of arr){
        if(!seen.has(num)){
            seen.add(num)
            arr[index++] = num
        }
    }
    return arr.slice(0,index)
}

console.log([...removeDuplicate(arr)])
*/
const removeDuplicateTwoPointer=(arr)=>{
    let n= arr.length;
    if(n<2) return arr
    let i = 0; let j =1
    while(j<n){
        if(arr[j]!==arr[i]){
            arr[i+1] = arr[j]
            i++
        }
        j++
    } 
    return i+1
}

let k = removeDuplicateTwoPointer(arr)
console.log(arr.slice(0,k))
