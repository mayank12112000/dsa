/*
Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6
Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing) */

// brute force
const fibo=(n)=>{
    const fib = new Array(n+1)
    fib[0] = 0
    if(n==0)return fib
    fib[1] = 1
    for(let i = 2;i<=n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibo(8))

// recursion

const recFib = (n)=>{ // give nth term of fib series
    if(n<=1) return n
    return recFib(n-1) +recFib(n-2)
}
console.log(recFib(8))