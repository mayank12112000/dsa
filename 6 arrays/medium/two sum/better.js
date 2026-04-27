
const arr = [2,6,5,8,11]
const target = 14

const twoSum = (arr, target)=>{
    let map = new Map();
    for(let i =0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i]) || i))
    }
    for(let i = 0;i<arr.length;i++){
        if(map.has(target-arr[i])){
            return true
        }
    }
    return false
}

const twoSumIdx = (arr, target)=>{
    let map = new Map();
    for(let i = 0;i<arr.length;i++){
        let compliment = target - arr[i]
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(arr[i],i)
    }
    return [-1,-1]
}

console.log(twoSum(arr,target))
console.log(twoSumIdx(arr,target))