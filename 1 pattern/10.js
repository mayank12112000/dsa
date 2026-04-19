/*
n = 5
*
**
***
****
*****
****
***
**
*
 */

let n = 5
for(let i = 0;i<=2*n-1;i++){
    let result = ""
    let stars;
    if(i>n){
        stars = 2*n - i
    }else{
        stars = i
    }
    for(let j = 0;j<stars;j++){
        result += "*"
    }
    console.log(result)

}