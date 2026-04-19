/* for n = 5
*********
 *******
  *****
   ***
    *
 */

let n = 5

for(let i = 1;i<=n;i++){
    let result = ''
    for(let j = i;j>0;j--){
        result += " "
    }
    for(let k =0;k<(2*n - 2*i +1);k++){
        result+="*"
    }
    console.log(result)
}