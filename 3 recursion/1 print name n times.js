const printNameNTimes=(n,count,name)=>{
    if(count === n){return}
    console.log(name)
    printNameNTimes(n,count+1,name)
}

printNameNTimes(7,0,"Mayank")