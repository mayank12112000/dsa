/*
Input: N = 4
Output: 1, 2, 3, 4
Explanation: All the numbers from 1 to 4 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case. */
let n = 5
const printTillN=(n,currentNumber)=>{
    if(currentNumber>n) return
    console.log(currentNumber)
    printTillN(n,currentNumber+1)
}

printTillN(10,1)