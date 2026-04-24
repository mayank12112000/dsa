const arr = [8,8,7,6]

const secondLargest = (arr)=>{
    let n = arr.length
    let max = arr[0]
    let second = -1
    if(n<2) return -1
    for(let i = 1;i<n;i++){
        if(arr[i]>max){
            second = max
            max = arr[i]
        }
        if(arr[i]<max && arr[i]>second){
            second = arr[i]
        }
    }
    return second
}
console.log(secondLargest(arr))