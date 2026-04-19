let n1 = 3
let n2 = 81
/*
brute force but improved
for(let i = Math.min(n1,n2); i>0;i--){
    if(n1%i == 0 && n2 % i == 0){
        console.log(i)
        break
    }
}
*/

// Euclidean algo
/*
const gcd = (n1,n2)=>{
    if(n1 == n2){
        return n1
    }
    else{
        let greater = Math.max(n1,n2)
        let smaller = Math.min(n1,n2)
        return gcd(greater - smaller, smaller)
    }
}
console.log(gcd(n1,n2))
*/


const bestGCD = (a,b)=>{
   while (a>0 && b>0){
        if(a>b){
            a = a%b
        }else{
            b = b%a
        }
    }
    if(a == 0) return b
    return a
}
console.log(bestGCD(n1,n2))