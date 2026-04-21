let arr = [13,46,24,52,20,9]

const bubbleSort=(arr)=>{
    let n = arr.length
    for(let i = n;i>1;i--){
        let swapped = false // optimization for already sorted array
        for(let j = 0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) break
    }   
    return arr
}
console.log(bubbleSort(arr))