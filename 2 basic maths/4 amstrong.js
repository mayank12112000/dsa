const cuebSum=(n)=>{
    cubeSum = 0
    while(n>0){
        cubeSum += Math.pow(n%10,3)
        n = Math.floor(n/10)
    }
    return cubeSum
}
let n = 371
console.log(cuebSum(n)==n)