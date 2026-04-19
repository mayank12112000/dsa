/*
1
12
123
1234
12345
 */
let n = 6
for (let i=0;i<n;i++){
    let result = ""
    for(let j =0;j<=i;j++){
        result+= j+1
    }
    console.log(result)
}