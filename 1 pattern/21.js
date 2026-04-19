/*
n=5
*****
*   *
*   *
*   *
*****
 */

let n = 5
for(let i = 0;i<n;i++){
    let result = ""
    for(let j = 0;j<n;j++){
        if(i==0 || i == n-1 || j == 0 || j == n-1){
            result+="*"
        }else{
            result += " "
        }
    }
    console.log(result)
}