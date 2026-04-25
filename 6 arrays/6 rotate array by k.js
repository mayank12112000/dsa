/*Input : nums = [1, 2, 3, 4, 5, 6, 7], k = 2, right
Output : [6, 7, 1, 2, 3, 4, 5]
Explanation : rotate 1 step to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5] 

Input : nums = [1, 2, 3, 4, 5, 6], k=2, left
Output : [3, 4, 5, 6, 1, 2]
Explanation :rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2] */

const nums = [1, 2, 3, 4, 5, 6]
let k = 2
/*
const rotateByKBrute=(arr,displacement)=>{
    let n = arr.length
    if(n<2) return arr
    let k = displacement%n
    let temp = new Array(k)
    // filling temp arr upto k terms
    for(let i = 0;i<k;i++){
        temp[i] = arr[i]
    }
    // placing array terms upto n-k length
    for(let i = 0;i<n-k;i++){
        arr[i] = arr[i+k]
    }

    // placing temp in the last 
    for(let i =0;i<temp.length;i++){
        arr[n-k+i] = temp[i]
    }
    return arr
}

console.log(rotateByKBrute(nums,k))
*/

const reverse = (arr,start,end)=>{
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
}
const optimalRotation=(arr,dis,direction)=>{
    let n = arr.length
    let k = dis%n
    if(n<2) return arr
    if(direction == "left"){
        reverse(arr,0,k-1)
        reverse(arr,k,n-1)
        reverse(arr,0,n-1)
    }else{
        reverse(arr,0,n-1)
        reverse(arr,0,k-1)
        reverse(arr,k,n-1)
    }
    return arr
}

console.log(optimalRotation(nums,k,"right"))