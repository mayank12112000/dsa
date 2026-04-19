/*
Input: N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.

Input: N = 7789                
Output: 9877
Explanation: The reverse of number 7789 is 9877.
*/

const reverse=(n)=>{
    let reverse = 0
    while(n>0){
        reverse = reverse * 10 + n%10
        n = Math.floor(n /10)
    }
    return reverse
}

console.log(reverse(7809500))
