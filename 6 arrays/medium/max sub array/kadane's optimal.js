const arr = [-1,-2,5,2,4,8,-5,9]

const maxSubArr = (arr)=>{
    let sum = 0
    let max = -Infinity
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
        if(sum<0){
            sum = 0
        }
        if(sum>max){
            max = sum
        }
    }
    return max
}

console.log(maxSubArr(arr))