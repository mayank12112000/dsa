let arr = "mayank"
let rec=(n)=>{
    if(n<=1) return n
    return rec(n-1) + rec(n-2)
}
console.log(rec(5))