/*
ABCDE
ABCD
ABC
AB
A
 */

let n = 5
for(let i = 0;i<n;i++){
    let result= ""
    for(let j = n;j>i;j--){
        result += String.fromCharCode(70-j)
    }
    console.log(result)
}