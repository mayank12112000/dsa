/*
Input: N = 4
Output: 4, 3, 2, 1
Explanation: All the numbers from 4 to 1 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case. */

const printNto1=(currentNumber)=>{
    if(currentNumber==0) return
    console.log(currentNumber)
    printNto1(currentNumber-1)
}

printNto1(10)