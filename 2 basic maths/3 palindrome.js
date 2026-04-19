const reverse =(n)=>{
    let result = 0
    while (n>0){
        result = result *10 + n%10
        n = Math.floor(n/10)
    }
    return result
}
let n = 7010
console.log(n == reverse(n))