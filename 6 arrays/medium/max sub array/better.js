const arr = [1,2,3,4]

const allSubArray=(arr)=>{
    let max = -Infinity
    for(let i = 0;i<arr.length;i++){
        let sum = 0
        for(let j = i;j<arr.length;j++){
                sum += arr[j]
            if(sum>max){
                max = sum
            }
            console.log(sum)
        }
    }
    return max
}
console.log(allSubArray(arr))