/*Input: N = 5, Arr[] = {4,1,7,9,3}
Output: {1, 3, 4, 7, 9}
Explanation: After sorting the array in ascending order it becomes 1, 3, 4, 7, 9
Input: N = 8, Arr[] = {4,6,2,5,7,9,1,3}
Output: {1, 2, 3, 4, 5, 6, 7, 9}
Explanation: After sorting the array in ascending order it becomes 1, 2, 3, 4, 5, 6, 7, 9 */

let arr = [4,6,2,5,7,9,1,3]

const partition=(arr,low,high)=>{
    let pivot = arr[low]
    let i = low
    let j = high
    while(i<j){
        while(arr[i]<= pivot && i<=high){
            i++
        }
        while(arr[j]>pivot && j>=low){
            j--
        }
        if(i<j){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
        let temp = arr[j]
        arr[j] = pivot
        arr[low] = temp
        return j
}

const quickSort =(arr, low, high)=>{
    if(low<high){
        let partionIdx = partition(arr, low, high)
        quickSort(arr,low,partionIdx-1)
        quickSort(arr,partionIdx+1,high)
    }
}

quickSort(arr,0,arr.length-1)
console.log(arr)