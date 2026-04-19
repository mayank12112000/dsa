/*
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
 */

let n = 5
for(let i = 1;i<=n;i++){
    let result = ""
    for(let j = i;j>0;j--){
        result += "*"
    }
    for(let k = 0;k<(n-i)*2;k++){
        result += " "
    }
    for(let j = i;j>0;j--){
        result += "*"
    }
    console.log(result)
}
for(let i = n-1;i>0;i--){
    let result = ""
    for(let j = i;j>0;j--){
        result += "*"
    }
    for(let k = 0;k<(n-i)*2;k++){
        result += " "
    }
    for(let j = i;j>0;j--){
        result += "*"
    }
    console.log(result)
}
