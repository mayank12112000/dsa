/*
A
BB
CCC
DDDD
EEEEE
 */

let n = 5

for(let i = 0;i<n;i++){
    let result = ""
    for(let j = 0;j<=i;j++){
        result += String.fromCharCode(65+i)
    }
    console.log(result)
}