/*
Example 1:
Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.
                        
Example 2:
Input:N = 7789              
Output: 4
Explanation: The number 7789 has 4 digits.
 */

let n = 4444554454
let number = Math.abs(n)
let count = 0
while(number >= 1){
    count+= 1
    number = Math.floor(number /10)
}
console.log(count)