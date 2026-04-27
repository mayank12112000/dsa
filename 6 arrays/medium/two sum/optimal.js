const arr = [2,6,5,8,11]
const target = 14

const twoSum = (arr,target)=>{
    // store map value and idx
    const map = arr.map((val,idx)=>[val,idx])
    // sort the map
    map.sort((a,b)=> a[0]-b[0])
    let left = 0
    let right = map.length -1
    // two pointers in map, left and right
    while(left<right){
        let sum = map[left][0] + map[right][0]
        if(sum === target){
            return [left,right]
        }else if(sum > target){
            right--
        }else{
            left++
        }
    }
    return [-1,-1]

}

console.log(twoSum(arr,target))