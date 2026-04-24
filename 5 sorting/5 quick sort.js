
let arr = [4,6,2,5,7,9,1,3]

const parition=(arr,low,high)=>{
    let i = low;
    let j = high;
    let pivot = arr[low]
    while(i<j){
        while(i<=high && arr[i]<=pivot ){
            i++
        }
        while(j>=low && arr[j]>pivot){
            j--
        }
        if(i<j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    arr[low] = arr[j]
    arr[j] = pivot
    return j
}

const qS=(arr,low,high)=>{
    if(low<high){
        let partitionIdx = parition(arr,low,high)
        qS(arr,low,partitionIdx-1)
        qS(arr,partitionIdx+1,high)
    }
}
qS(arr,0,arr.length-1)
console.log(arr)