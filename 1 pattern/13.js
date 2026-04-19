/*
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15
 */

let n = 5
let start = 1
for(let i = 1;i<=n;i++){
    let result = ""
    for(let j = 0;j<i;j++){
        result+=start+" "
        start+=1
    }
    console.log(result)
}