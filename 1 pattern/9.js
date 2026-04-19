/*
n=5
    * 
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
 */
let n = 5
const firstHalf = (n)=>{
    for(let i = 1;i<=5;i++){
        let result = ""
        for(let j = 0;j<n-i;j++){
            result+=" "
        }
        for(let k = 0;k<2*i-1;k++){
            result += "*"
        }
        console.log(result)
    }
}

const secondHalf =(n)=>{
    for(let i =0;i<n;i++){
        let result = ""
        for(let j = 0;j<i;j++){
            result+=" "
        }
        for(let k = 0;k<(2*n - 2*i -1);k++){
            result+="*"
        }
        console.log(result)
    }
}

firstHalf(n)
secondHalf(n)