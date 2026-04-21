let arr = [7,8,6,5,4,7,5,7,8,5,4,4]

const insertionSort = (arr)=>{
    let n = arr.length
    for(let i =0;i<n-1;i++){
        let j = i
        while (j>0 && arr[j]<arr[j-1]){
            [arr[j-1],arr[j]] = [arr[j], arr[j-1]]
            j--
        }
    }
    return arr
}

console.log(insertionSort(arr))