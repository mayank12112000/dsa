const arr = [10,9,9,9,10]

const majority=(arr)=>{
    let num = arr[0]; let count = 0
    for(let i = 0;i<arr.length;i++){
        if(count !==0){
            if(arr[i] === num){
                count++
            }else{
                count--
            }
        }else{
            num = arr[i]; count=1
        }
    }
    console.log(num)
    // check if num freq > n/2
    let freq = 0
    for(let i= 0;i<arr.length;i++){
        if(arr[i]=== num){
            freq++
        }
    }

    if(freq>arr.length/2){
        return num
    }

    return -1
}
console.log(majority(arr))