/*Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0. */


const nums = [-1,0,1,2,-1,-4]

const threeSum = (arr)=>{
    const res = new Set()
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            for(let k = j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    let temp = [arr[i],arr[j],arr[k]].sort((a,b)=>a-b)
                    res.add(JSON.stringify(temp))
                }
            }
        }
    }
    let ans = Array.from(res).map(str=>JSON.parse(str))
    return ans
}

console.log(threeSum(nums))