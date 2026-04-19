/*
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=15 */

let sumTillN=(n)=>{
    if(n==1) return n
    return n + sumTillN(n-1)
}

console.log(sumTillN(10))