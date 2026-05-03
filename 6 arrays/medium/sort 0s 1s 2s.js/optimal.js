// national dutch flag algo/ three pointers

const arr = [0,0,1,2,2,2,1,1,2,0,0,1]


const sort012=(arr)=>{
    let low = 0
    let mid = 0
    let high = arr.length -1

    while(mid<=high){
        if(arr[mid]===0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]]
            mid++; low++
        }else if(arr[mid]===1){
            mid++
        }else{
            [arr[high],arr[mid]] = [arr[mid],arr[high]]
            high--;
        }
    }
    return arr
}

console.log(sort012(arr))