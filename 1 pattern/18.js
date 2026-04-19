/*
E 
D E 
C D E 
B C D E 
A B C D E
 */
let n = 5
for(let i = n;i>0;i--){
    result = ""
    for(let j = 1;j<=n-i+1;j++){
        result += String.fromCharCode(65+i-2+j)
    }
    console.log(result)
}
