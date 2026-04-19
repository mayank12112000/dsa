/*
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
 */
let n = 5
for(let i = 0;i<n;i++){
    let result = ""
    for(let j = 1;j<n-i;j++){
        result += " "
    }
    for(let k = 0;k< 2*i+1;k++){
        if(k>i){
            result += String.fromCharCode(65 + (2 * i - k));
        }
        else{
            result += String.fromCharCode(65 +k);

        }
    }
    console.log(result)
}