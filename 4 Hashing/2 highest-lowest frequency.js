/*
Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


Example 2:
Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
 */
const highestCount = (arr,n)=>{
    let freqMap = new Map()
    for(let num of arr){
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    let minFreq = arr.length; let minEle = 0;
    let maxFreq = 0; let maxEle = 0;
    for(let [element, count] of freqMap){
        // console.log(element,count)
        if(count>maxFreq){
            maxFreq = count
            maxEle = element
        }
        if(count<minFreq){
            minFreq = count
            minEle = element
        }
    }
    // console.log(freqMap)
    console.log(minEle, maxEle)
}

highestCount([10,5,10,15,10,5])