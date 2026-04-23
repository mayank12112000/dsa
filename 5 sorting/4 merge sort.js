/*
Input : N=7,arr[]={3,2,8,5,1,4,23}
Output : {1,2,3,4,5,8,23}
Explanation : Given array is sorted in non-decreasing order.
Input : N=5, arr[]={4,2,1,6,7}
Output : {1,2,4,6,7}
Explanation : Given array is sorted in non-decreasing order. */

const arr=[9,3,2,8,5]

const merge = (arr,low,mid,high)=>{
    let temp = []
    let left = low
    let right = mid+1

    while(left <= mid && right <= high){
        if(arr[left]<arr[right]){
            temp.push(arr[left])
            left ++
        }else{
            temp.push(arr[right])
            right++
        }
    }
     while(left <= mid){
            temp.push(arr[left])
            left++
        }
        while(right<=high){
            temp.push(arr[right])
            right++
        }
    for(let i = low;i<=high;i++){
        arr[i] = temp[i-low]
    }
}

function mergeSort(arr,low,high){
    if(low>=high) return
    const mid= Math.floor((low+high)/2)
    mergeSort(arr,low,mid)
    mergeSort(arr,mid+1,high)
    merge(arr,low,mid,high)
}
mergeSort(arr,0,arr.length-1)
console.log(...arr)