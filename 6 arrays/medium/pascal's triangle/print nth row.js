const n = 6

const printNthRow=(n)=>{
    let ans = 1;// first element
    console.log(ans)
    for(let i = 1;i<n;i++){
        ans = ans*(n-i)/i
        console.log(ans)
    }
}

printNthRow(n)