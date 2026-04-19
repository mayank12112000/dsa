/*
n=5
1        1
12      21
123    321
1234  4321
1234554321
 */

let n = 5

for(let i = 1;i<=n;i++){
    let result = ""
    for(let j =1;j<=i;j++){
        result += j
    }
    for(let k = 0;k<(2*n - 2*i);k++){
        result += " "
    }
    for(let l = i;l>0;l--){
        result+= l
    }
    console.log(result)
}