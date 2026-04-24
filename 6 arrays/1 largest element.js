const largestNum = (arr)=>{
    let n = arr.length
    let max = arr[0]
    for(let i = 1;i<n;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(largestNum([4,5,67,8,,64,,53,54,87,9,4,6,543]))