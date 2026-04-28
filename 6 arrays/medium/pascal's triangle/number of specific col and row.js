const ncr=(n,r)=>{
    let res = 1
    for(let i = 0;i<r;i++){
        res = res * (n-i)
        res = res / (i+1)
    }
    return res
}

console.log(ncr(5,2))