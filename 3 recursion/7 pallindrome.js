/*Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.*/

let str = "abccba"

const isPalindrome =(str,i)=>{
    if(i>=str.length/2) return true
    if(str[i] !== str[(str.length)-1-i]) return false
    return isPalindrome(str,i+1)
}

console.log(isPalindrome(str,0))
