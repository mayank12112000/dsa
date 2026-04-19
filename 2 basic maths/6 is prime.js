let n = 3
const isPrime =(n)=>{
    if(n==1 || n ==0) return false
    let divisors = []
    for(let i = 1;i<Math.sqrt(n);i++){
        if(n%i==0){
            divisors.push(i)
            if(n%i !== i){
                divisors.push(n/i)
            }
        }
    }
    return divisors.length == 2
}

console.log(isPrime(n))