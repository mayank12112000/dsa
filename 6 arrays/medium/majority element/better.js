const arr = [2,2,3,3,1,2,2]

const majority=(arr)=>{
    const map = new Map()
    for(let i = 0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0) +1)
    }

    for(let [key,value] of map){
        if(value > (arr.length/2)){
            return key
        }
    }
    return -1
}

console.log(majority(arr))