let arr = [13,46,24,52,20,9]

const selectionSort = (arr)=>{
    let n = arr.length
    for(let i = 0;i<n-1;i++){
        let minIdx = i
        for(let j = i+1;j<n;j++){
            if(arr[j]<arr[minIdx]){
                minIdx = j
            }
        }
        // swap
        if(minIdx !== i){ // no need to swap if min ind is i
            let temp = arr[i]
            arr[i] = arr[minIdx]
            arr[minIdx] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr))