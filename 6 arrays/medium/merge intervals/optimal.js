/*
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
Example 3:

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping. */

const intervals = [[1,3],[2,6],[8,10],[15,18]]

const mergeIntervals = (intervals)=>{
    let result = new Array()
    // sort the intervals
    intervals.sort((a,b)=>a[0]-b[0])
    let current= intervals[0]
    
    for(let i=1;i<intervals.length;i++){
        if(current[1]<intervals[i][0]){
            result.push(current)
            current = intervals[i]
        }else if(current[1]>=intervals[i][0]){
            current[1] = Math.max(current[1],intervals[i][1])
        }
    }
    result.push(current)
    return result
}


console.log(mergeIntervals(intervals))