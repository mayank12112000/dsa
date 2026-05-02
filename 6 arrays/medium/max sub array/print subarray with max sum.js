const arr = [-5,-9,7,8,5,-8,6]

const maxSubArr=(arr)=>{
    let max = -Infinity
    let sum = 0
    let start = 0
    let end = 0
    let maxSubArr= []
    for(let i = 0;i<arr.length;i++){
        if(sum==0){start = i}
        sum += arr[i]

        if(sum>max){
            max = sum
            end = i
        }
        if(sum<0){
            sum = 0
        }
    }
    for(let i = start;i<=end;i++){
        maxSubArr.push(arr[i])
    }
    console.log(maxSubArr)
    return max
}

console.log(maxSubArr(arr))