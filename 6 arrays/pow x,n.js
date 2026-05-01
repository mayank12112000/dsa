let x = 2.0000
let n = -5

// brute force
/*
const pow=(x,n)=>{
    let ans = 1
    let pow = n>0 ? n : (-1*n) // making power positive
    for(let i = 1;i<=pow;i++){
        ans = ans * x
    }
    return n>0?ans:1/ans
}

console.log(pow(2,-2))
*/

const pow=(x,n)=>{
    if(n === 0 ) return 1
    if(n===1) return x
    if(n%2===0){ // even
        return pow(x*x,n/2)
    }else{ // odd
        return x * pow(x,n-1)
    }
}

const myPow=(x,n)=>{
    if(n<0){
        return 1/pow(x,-1*n)
    }
    return pow(x,n)
}
console.log(myPow(2,-3))
