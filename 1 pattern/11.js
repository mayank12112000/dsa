/*
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1
 */

let n = 5

for(let i = 0;i<n;i++){
    let result = ""
    for(let j = 0;j<=i;j++){
        result += (i+j+1)% 2
    }
    console.log(result)
}